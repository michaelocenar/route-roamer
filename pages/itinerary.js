import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

function parseItinerary(itineraryText) {
  const itineraryData = JSON.parse(itineraryText);
  return itineraryData.Itinerary;
}

export default function Itinerary() {
  const router = useRouter();
  const { result } = router.query;
  console.log("result:", result);

  if (typeof result === "string") {
    const itinerary = parseItinerary(result);
    const allLocations = itinerary.flatMap((day) =>
      day.Activities.map((activity) => activity.Location)
    );
    const mapCenter = {
      lat:
        allLocations.reduce((sum, loc) => sum + loc.lat, 0) /
        allLocations.length,
      lng:
        allLocations.reduce((sum, loc) => sum + loc.lng, 0) /
        allLocations.length,
    };

    return (
      <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={mapCenter}>
            {allLocations.map((location, index) => (
              <Marker key={index} position={location} />
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
