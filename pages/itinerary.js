import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";
import { parseItinerary, findActivityByLocation } from "./itineraryHelpers";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export default function Itinerary() {
  const router = useRouter();
  const { result } = router.query;
  console.log("result:", result);

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
      return (
        <div className={styles.container}>
          <h1>Error: No itinerary data found.</h1>
        </div>
      );
    }
  }