import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

export default function Itinerary() {
  const router = useRouter();
  const { result } = router.query;

  if (typeof result === "string") {
    const parsedResult = JSON.parse(result);
    const itineraryItems = parsedResult.Itinerary.map((item, index) => {
      const { Date, Activities } = item;

      return (
        <div key={index} className={styles.day}>
          <h2>Day {index + 1}: {Date}</h2>
          <ul className={styles.itinerary}>
            {Activities.map((activity, index) => {
              const { Time, Activity, Location, Description } = activity;
              return (
                <li key={index}>
                  {Time}: {Activity} ({Location.lat}, {Location.lng})
                  <br />
                  {Description}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });

    const locations = parsedResult.Itinerary.flatMap((item) =>
      item.Activities.map((activity, index) => ({
        id: index,
        name: activity.Activity,
        position: activity.Location,
      }))
    );

    const getMapCenter = (locations) => {
      if (locations.length === 0) return defaultCenter;

      const avgLatLng = locations.reduce(
        (acc, loc) => {
          acc.lat += loc.position.lat;
          acc.lng += loc.position.lng;
          return acc;
        },
        { lat: 0, lng: 0 }
      );

      avgLatLng.lat /= locations.length;
      avgLatLng.lng /= locations.length;

      return avgLatLng;
    };

    const mapCenter = getMapCenter(locations);

    return (
      <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={mapCenter}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                title={location.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
        <div className={styles.tiles}>{itineraryItems}</div>
      </div>
    );
            }}