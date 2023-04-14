import { useRouter } from "next/router";
import styles from "./itinerary.module.css";

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
    return (
      <div className={styles.container}>
        <h1>Your Travel Itinerary</h1>
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
