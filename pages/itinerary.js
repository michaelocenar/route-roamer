import { useRouter } from "next/router";
import styles from "./itinerary.module.css";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useState, useRef } from "react";
import { parseItinerary, API_KEY, mapContainerStyle, googleMapsLibraries } from "./itineraryHelpers";
import Nav2 from "../components/Nav2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
  
  const downloadPDF = () => {
    const itineraryElement = document.getElementById("itineraryContent");
    const text = itineraryElement.innerText.split("\n");
  
    const pdf = new jsPDF("p", "pt", "a4"); 
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    const lineHeight = 20;
    const maxLineWidth = pageWidth - 2 * margin;
  
    let y = margin;
  
    const unwantedWords = [
      "Map",
      "Satellite",
      "Keyboard shortcuts",
      "Terms of Use",
      "Download Itinerary as PDF",
      "Get Directions",

    ];
  
    const filteredText = text.filter(
      (line) => !unwantedWords.some((word) => line.includes(word))
    );
  
    for (const line of filteredText) {
      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
  
      if (line.startsWith("Day")) {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        y += lineHeight;
      } else if (line.endsWith(":")) {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
      } else {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
      }
  
      const splitLines = pdf.splitTextToSize(line, maxLineWidth);
  
      for (const splitLine of splitLines) {
        pdf.text(splitLine, margin, y);
        y += lineHeight;
      }
    }
  
    pdf.save("itinerary.pdf");
  };
  
  if (typeof result === "string") {
    console.log("Result is a string");
    const itinerary = parseItinerary(result);
    console.log('itinerary', itinerary);
    const allLocations = itinerary.flatMap((day, dayIndex) =>
      day.Activities.map((activity, activityIndex) => ({
        ...activity.Location,
        dayIndex,
        activityIndex,
        name: activity.Activity,
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

    const handleDirections = (location) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const origin = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const destination = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${location.lat},${location.lng}&travelmode=driving`;
            window.open(destination, '_blank');
          },
          (error) => {
            alert('Error: ' + error.message);
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };


    return (
      <div className={styles.darkModeWrapper}>
        <div className={styles.container}>
          <Nav2 />
          <div className={styles.title}>
            <h1>Your Travel Itinerary</h1>
            <div className={styles.buttonDiv}>
              <button onClick={downloadPDF} className={styles.downloadButton}>
              Download PDF
            </button>
            </div>
          </div>
          <div id="itineraryContent" className={styles.content}>
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
                          <InfoWindow
                            onCloseClick={() => setOpenInfoWindow(-1)}
                            options={{
                              pixelOffset: new window.google.maps.Size(0, -35),
                              maxWidth: 200,
                              boxStyle: {
                                backgroundColor: '#2b2e35',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08)',
                                padding: '16px',
                              },
                              closeBoxMargin: '8px',
                              closeBoxURL: 'https://your-icon-url/close-icon.svg',
                              infoBoxClearance: new window.google.maps.Size(20, 20),
                              zIndex: null,
                              disableAutoPan: false,
                            }}
                          >
                            <div className={styles.infoWindowContent}>
                              <h4>{location.name}</h4>
                              <p>{location.address}</p>
                              <button onClick={() => handleDirections(location)}>Get Directions</button>
                            </div>
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