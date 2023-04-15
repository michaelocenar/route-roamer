import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};


export default function Itinerary() {
  const router = useRouter();
  const { result } = router.query;

  if (typeof result === "string") {
    const itineraryItems = result
    .split("DAY ")
    .filter((item) => item.trim() !== "")
    .map((dayItinerary, index) => (
      <div key={index} className={styles.day}>
          <h2>Day {index + 1}</h2>
          <ul className={styles.itinerary}>
            {dayItinerary
              .split("\n")
              .filter((item) => item.trim() !== "")
              .map((item, index) => (
                <li key={index}>{item.trim()}</li>
                ))}
          </ul>
        </div>
      ));
      console.log("result: ", result);
      console.log("itineraryItems: ", itineraryItems);
      return (
        <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
          />
        </LoadScript>
        <div className={styles.tiles}>{itineraryItems}</div>
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
