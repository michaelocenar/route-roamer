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

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ destination, startDate, endDate, budget, preferences }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ destination, startDate, endDate, budget, preferences }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      router.push({ pathname: "/itinerary", query: { result: data.result } });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Nav />
      <Head>
        <title>Travel Itinerary Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <RotatingGlobe />
      <main className={styles.main}>
        <h3>Create your travel itinerary</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            name="start_date"
            placeholder="Enter start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            name="end_date"
            placeholder="Enter end date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <div>
            <h4>Preferences</h4>
            <input
              type="text"
              name="activities"
              placeholder="Enter activity preferences"
              value={preferences.activities}
              onChange={(e) =>
                setPreferences({ ...preferences, activities: e.target.value })
              }
            />
            <input
              type="text"
              name="accommodation"
              placeholder="Enter accommodation preferences"
              value={preferences.accommodation}
              onChange={(e) =>
                setPreferences({ ...preferences, accommodation: e.target.value })
              }
            />
            <input
              type="text"
              name="transportation"
              placeholder="Enter transportation preferences"
              value={preferences.transportation}
              onChange={(e) =>
                setPreferences({ ...preferences, transportation: e.target.value })
              }
            />
          </div>
          <input type="submit" value="Generate itinerary" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
