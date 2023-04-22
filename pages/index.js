import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Nav from "../components/Nav";
import RotatingGlobe from "../components/RotatingGlobe";


export default function Home() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState({
    activities: "",
    accommodation: "",
    transportation: "",
  });
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination,
          startDate,
          endDate,
          budget,
          preferences,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      router.push({ pathname: "/itinerary", query: { result: data.result } });
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Nav />
      <Head>
        <title>ROUTE ROAMER</title>
      </Head>
      <div className={styles.background}>
        <RotatingGlobe />
      </div>
      <div>
        <main className={styles.main}>
          <div
            className={styles.modal}
            style={{ display: isLoading ? "flex" : "none" }}
          >
            <div className={styles.modalContent}>
              <div className={styles.loader}></div>
              <p>CREATING ITINERARY</p>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className={styles.title1}>
            <h4>CREATE YOUR PERFECT ITINERARY</h4>
            </div>
            <input
              type="text"
              name="destination"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <label for="name">Start date</label>
            <input
              type="date"
              name="start_date"
              placeholder="Starting on?"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              name="end_date"
              placeholder="Until when?"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <input
              type="number"
              name="budget"
              placeholder="Budget: 2000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <div>
            <div className={styles.title2}>
              <h5>Optional Preferences</h5>
              </div>
              <input
                type="text"
                name="activities"
                placeholder="Activity: Hiking, Shopping, Swimming"
                value={preferences.activities}
                onChange={(e) =>
                  setPreferences({ ...preferences, activities: e.target.value })
                }
              />
              <input
                type="text"
                name="accommodation"
                placeholder="Accomodation: Hotel, Hostel, AirBNB"
                value={preferences.accommodation}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    accommodation: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="transportation"
                placeholder="Transportation: Car, Train, Plane"
                value={preferences.transportation}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    transportation: e.target.value,
                  })
                }
              />
            </div>
            <input type="submit" value="CREATE" />
          </form>
          <div className={styles.result}>{result}</div>
        </main>
      </div>
    </div>
  );
}
