import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useRef } from "react";
import { parseItinerary, getPlaceId, API_KEY, mapContainerStyle, googleMapsLibraries } from "./itineraryHelpers";

export default function Itinerary() {
  console.log("Itinerary component rendered");
  const router = useRouter();
  const { result } = router.query;
  console.log("result:", result);

  // const modifiedResult = JSON.parse(result);
  // console.log("##01modifiedResult", modifiedResult);
  // console.log("##02modifiedResult", modifiedResult["Itinerary"]);
  // console.log("##03modifiedResult", modifiedResult["Itinerary"][0]["Activities"][0]["Activity"]);
  // console.log("##04modifiedResult", modifiedResult["Itinerary"][0]["Activities"][1]["Activity"]);

  // function extractData(result) {
  //   const modifiedResult = JSON.parse(result);
  //   const time = [];
  //   const activity = [];
  //   const description = [];
  //   const lat = [];
  //   const lng = [];

  //   modifiedResult.Itinerary[0].Activities.forEach(item => {
  //     time.push(item.Time);
  //     activity.push(item.Activity);
  //     description.push(item.Description);
  //     lat.push(item.Location.lat);
  //     lng.push(item.Location.lng);
  //   });

  //   return { time, activity, lat, lng, description };
  // }

  // const extractedData = extractData(result);
  // console.log("time", extractedData.time); // Output: ["9AM", "11AM", "1PM", "3PM", "5PM"]
  // console.log("activity", extractedData.activity); // Output: ["Stanley Park Seawall", "Granville Island Public Market", "Museum of Anthropology", "Vancouver Lookout", "Gastown"]
  // console.log("description", extractedData.description);
  // console.log("lat", extractedData.lat); // Output: [49.3021, 49.2714, 49.2631, 49.2804, 49.2839]
  // console.log("lng", extractedData.lng); // Output: [-123.1401, -123.1241, -123.2485, -123.1147, -123.1093]

  // const activityArray = [];

  // modifiedResult.Itinerary.forEach((day) => {
  //   day.Activities.forEach((activity) => {
  //     const activityObj = {
  //       time: activity.Time,
  //       lat: activity.Location.lat,
  //       lng: activity.Location.lng,
  //       description: activity.Description,
  //     };
  //     activityArray.push(activityObj);
  //   });
  // });

  // console.log("activityArray", activityArray);

  /// END OF WIP CODE

  const [openInfoWindow, setOpenInfoWindow] = useState(-1);
  const [placeDetails, setPlaceDetails] = useState(null);
  const mapRef = useRef();

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  if (typeof result === "string") {
    console.log("Result is a string");
    const itinerary = parseItinerary(result);
    const allLocations = itinerary.flatMap((day, dayIndex) =>
      day.Activities.map((activity, activityIndex) => ({
        ...activity.Location,
        dayIndex,
        activityIndex,
      }))
    );
    const mapCenter = {
      lat:
        allLocations.reduce((sum, loc) => sum + loc.lat, 0) /
        allLocations.length,
      lng:
        allLocations.reduce((sum, loc) => sum + loc.lng, 0) /
        allLocations.length,
    };

    const handleTextClick = (dayIndex, activityIndex) => {
      const locationIndex = allLocations.findIndex(
        (loc) => loc.dayIndex === dayIndex && loc.activityIndex === activityIndex
      );
      setOpenInfoWindow(locationIndex);
    };

    const fetchPlaceDetails = async (placeId) => {
      const map = mapRef.current;
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        placeId,
        fields: ["name", "formatted_address", "geometry", "rating"],
      };

      service.getDetails(request, (result, status) => {
        console.log("Place details result:", result); 
        console.log("Place details status:", status);
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaceDetails(result);
        }
      });
    };

    const onMarkerClick = async (index, location) => {
      console.log("onMarkerClick called with index:", index, "location:", location);
      setOpenInfoWindow(index);
      try {
        if (location && location.lat && location.lng) {
          const placeId = await getPlaceId(location.lat, location.lng);
          console.log("placeId:", placeId);
          if (placeId) {
            const placeDetails = await fetchPlaceDetails(placeId);
            console.log("placeDetails:", placeDetails);
            setPlaceDetails(placeDetails);
          }
        } else {
          console.error("Invalid location:", location);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
        <LoadScript googleMapsApiKey={API_KEY}  libraries={googleMapsLibraries}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={mapCenter}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {allLocations.map((location, index) => (
              <Marker
                key={index}
                position={location}
                onClick={() => onMarkerClick(index, location)}
              >
                {console.log("Marker location:", location)}
                {openInfoWindow === index && (
                  <InfoWindow onCloseClick={() => setOpenInfoWindow(-1)}>
                    <div>
                      {placeDetails ? (
                        <>
                          <h4>{placeDetails.name}</h4>
                          <p>{placeDetails.formatted_address}</p>
                          <p>Rating: {placeDetails.rating}</p>
                        </>
                      ) : (
                        <p>Loading place details...</p>
                      )}
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
        <div className={styles.tiles}>
        {itinerary.map((day, dayIndex) => (
          <div key={dayIndex} className={styles.day}>
            <h2>
              Day {dayIndex + 1}: {day.Date || "No date provided"}
            </h2>
            <ul className={styles.itinerary}>
              {day.Activities.map((activity, activityIndex) => (
                <li key={activityIndex}>
                  {activity.Time}:{" "}
                  <a
                    onClick={() =>
                      handleTextClick(dayIndex, activityIndex)
                    }
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {activity.Activity}
                  </a>
                  <br />
                  {activity.Description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
      );
    } else {
      console.log("Result is not a string");
      return (
        <div className={styles.container}>
          <h1>Error: No itinerary data found.</h1>
        </div>
      );
    }
  }