import { useRouter } from "next/router";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useState, useRef } from "react";
import { API_KEY, mapContainerStyle, googleMapsLibraries } from "./itineraryHelpers";
import Nav from "../components/Nav";
import activityRoutes from '../activityRoutes';
import db from '../db';
import styles from "./itineraryActivities.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


export default function Itinerary({ activities }) {
  console.log("Itinerary component rendered", activities);

  const router = useRouter();
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
  
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    const headerText = "Your Itinerary";
    const headerWidth = pdf.getStringUnitWidth(headerText) * pdf.getFontSize();
    pdf.text(headerText, (pageWidth - headerWidth) / 2, y);
    y += lineHeight * 2; 
  
    for (const line of filteredText) {
      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
  
      const formattedLine = line.replace(/(\d{2}:\d{2}):/g, "$1: ");
  
      if (formattedLine.startsWith("Day")) {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        y += lineHeight;
      } else if (formattedLine.endsWith(":")) {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
      } else {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
      }
  
      const splitLines = pdf.splitTextToSize(formattedLine, maxLineWidth);
  
      for (const splitLine of splitLines) {
        pdf.text(splitLine, margin, y);
        y += lineHeight;
      }
    }
  
    const currentDate = new Date();
    const fileName = `itinerary_${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}.pdf`;
    pdf.save(fileName);
  };
  

  const handleTextClick = (itineraryId) => {
    const locationIndex = allLocations.findIndex(
      (loc) => loc.itinerary_id === itineraryId
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
        <Nav />
        <div className={styles.title}>
          <h1>Your Travel Itinerary</h1>
          <div className={styles.buttonDiv}>
            <button onClick={downloadPDF} className={styles.downloadButton}>
              Download PDF
            </button>
          </div>
        </div>
        <div id="itineraryContent" className={styles.content}>
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
              {activities.map(activity => (
                <div key={activity.itinerary_id} className={styles.day}>
                  <h2>
                    {activity.label}
                  </h2>
                  <ul className={styles.itinerary}>
                    <li>
                      <div className="timeAndActivity">
                        <span className="time">{activity.time}:</span>
                        <a
                          onClick={() => handleTextClick(activity.itinerary_id)}
                          className={styles.locationLink}
                        >
                          {activity.activity}
                        </a>
                      </div>
                      <div className="description">{activity.description}</div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps(context) {
  const { location } = context.query;
  const { rows } = await db.query('SELECT itinerary_id, label, activity, time, lat, lng, description, location FROM itinerary_activities WHERE location = $1', [location]);
  // console.log('activities:' {activities: rows});
  console.log('activities:', rows);
  return { props: { activities: rows } };
}


