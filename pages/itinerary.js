import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

function parseItinerary(itineraryText) {
  const itineraryData = JSON.parse(itineraryText);
  return itineraryData.Itinerary;
}

function findActivityByLocation(location, itinerary) {
  for (const day of itinerary) {
    for (const activity of day.Activities) {
      if (
        activity.Location.lat === location.lat &&
        activity.Location.lng === location.lng
      ) {
        return activity;
      }
    }
  }
}

export default function Itinerary() {
  const router = useRouter();
  const { result } = router.query;
  console.log("result:", result);

  // const modifiedResult = JSON.parse(result);
  // console.log("##01modifiedResult", modifiedResult);
  // console.log("##02modifiedResult", modifiedResult["Itinerary"]);
  // console.log("##03modifiedResult", modifiedResult["Itinerary"][0]["Activities"][0]["Activity"]);
  // console.log("##04modifiedResult", modifiedResult["Itinerary"][0]["Activities"][1]["Activity"]);

  function extractData(result) {
    const modifiedResult = JSON.parse(result);
    const time = [];
    const activity = [];
    const lat = [];
    const lng = [];

    modifiedResult.Itinerary[0].Activities.forEach(item => {
      time.push(item.Time);
      activity.push(item.Activity);
      lat.push(item.Location.lat);
      lng.push(item.Location.lng);
    });

    return { time, activity, lat, lng };
  }

  const extractedData = extractData(result);
  console.log(extractedData.time); // Output: ["9AM", "11AM", "1PM", "3PM", "5PM"]
  console.log(extractedData.activity); // Output: ["Stanley Park Seawall", "Granville Island Public Market", "Museum of Anthropology", "Vancouver Lookout", "Gastown"]
  console.log(extractedData.lat); // Output: [49.3021, 49.2714, 49.2631, 49.2804, 49.2839]
  console.log(extractedData.lng); // Output: [-123.1401, -123.1241, -123.2485, -123.1147, -123.1093]


  const [openInfoWindow, setOpenInfoWindow] = useState(-1);

  if (typeof result === "string") {
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

    return (
      <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={mapCenter}
          >
            {allLocations.map((location, index) => (
              <Marker
                key={index}
                position={location}
                onClick={() => setOpenInfoWindow(index)}
              >
                {openInfoWindow === index && (
                  <InfoWindow onCloseClick={() => setOpenInfoWindow(-1)}>
                    <div>
                      {(() => {
                        const activity = findActivityByLocation(
                          location,
                          itinerary
                        );
                        return (
                          <>
                            <h4>{activity.Activity}</h4>
                            <p>{activity.Description}</p>
                          </>
                        );
                      })()}
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
              <h2>{day.Date}</h2>
              <ul className={styles.itinerary}>
                {day.Activities.map((activity, activityIndex) => (
                  <li
                    key={activityIndex}
                    onClick={() => handleTextClick(dayIndex, activityIndex)}
                    style={{ cursor: "pointer" }}
                  >
                    {activity.Time}: {activity.Activity}
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
    return (
      <div className={styles.container}>
        <h1>Error: No itinerary data found.</h1>
      </div>
    );
  }
}

