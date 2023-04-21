import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useState, useRef } from "react";
import { parseItinerary, API_KEY, mapContainerStyle, googleMapsLibraries } from "./itineraryHelpers";
import Nav2 from "../components/Nav2";

export default function Itinerary() {
  console.log("Itinerary component rendered");
  const router = useRouter();
  const { result } = router.query;
  const [openInfoWindow, setOpenInfoWindow] = useState(-1);

  const mapRef = useRef();

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  if (typeof result === "string") {
    console.log("result", result);
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

<<<<<<< HEAD
=======
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
        // Set the destination name
        if (!destination || destination === "Your Travel Itinerary") {
          setDestination(`Your trip to ${result.name}`);
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
            setPlaceDetails(placeDetails);
          }
        } else {
          console.error("Invalid location:", location);
        }
      } catch (error) {
        console.error(error);
      }
    };

>>>>>>> origin
    return (
      <div className={styles.darkModeWrapper}>
        <div className={styles.container}>
          <Nav2 />
          <h1 className={styles.title}>Your Travel Itinerary</h1>
          <div className={styles.content}>
            {typeof result === "string" ? (
            <LoadScript googleMapsApiKey={API_KEY} libraries={googleMapsLibraries}>
              <div className={styles.map}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={13.5}
                  center={mapCenter}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {allLocations.map((location, index) => (
                    <Marker
                      key={index}
                      position={location}
                      onClick={() => setOpenInfoWindow(index)}
                    >
                      {console.log("Marker location:", location)}
                      {openInfoWindow === index && (
                        <InfoWindow onCloseClick={() => setOpenInfoWindow(-1)} options={{ pixelOffset: new window.google.maps.Size(0, -35), maxWidth: 200 }}>
                          <div></div>
                        </InfoWindow>
                      )}
                    </Marker>
                  ))}
                </GoogleMap>
              </div>
              <div className={styles.tiles}>
                {itinerary.map((day, dayIndex) => (
                  <div key={dayIndex} className={styles.day}>
                    <h2>
                      Day {dayIndex + 1}: {day.Date || "No date provided"}
                    </h2>
                    <ul className={styles.itinerary}>
                      {day.Activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>
                        <div className="timeAndActivity">
                          <span className="time">{activity.Time}:</span>
                          <a
                            onClick={() => handleTextClick(dayIndex, activityIndex)}
                            className={styles.locationLink}
                          >
                            {activity.Activity}
                          </a>
                        </div>
                        <div className="description">{activity.Description}</div>
                      </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              </LoadScript>
              ) : (
          <div className={styles.container}>
            <h1>Error: No itinerary data found.</h1>
          </div>
        )}
      </div>
<<<<<<<<< Temporary merge branch 1
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
=========
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
>>>>>>>>> Temporary merge branch 2
