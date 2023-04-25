import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./RotatingGlobe.module.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const Globe = () => {
  const [map, setMap] = useState(null);
  const [spinEnabled, setSpinEnabled] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(
    "mapbox://styles/mapbox/satellite-streets-v11"
  );
  const mapContainer = useRef(null);
  // The following values can be changed to control rotation speed:
  const secondsPerRevolution = 2000;
  const maxSpinZoom = 3;
  const slowSpinZoom = 1;

  const fogSettings = {
    "mapbox://styles/mapbox/satellite-streets-v11": {
      range: [0.1, 6],
      color: "#dc9f9f",
      "horizon-blend": 0.3,
      "high-color": "#245bde",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
    "mapbox://styles/mapbox/streets-v11": {
      range: [0.1, 6],
      color: "#3e7fd9",
      "horizon-blend": 0.1,
      "high-color": "#3e7fd9",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
    "mapbox://styles/mapbox/outdoors-v11": {
      range: [0.1, 6],
      color: "#dc9f9f",
      "horizon-blend": 0.8,
      "high-color": "#245bde",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
    "mapbox://styles/mapbox/light-v10": {
      range: [0.1, 6],
      color: "#dc9f9f",
      "horizon-blend": 0.3,
      "high-color": "#245bde",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
    "mapbox://styles/mapbox/dark-v10": {
      range: [0.1, 6],
      color: "#dc9f9f",
      "horizon-blend": 0.3,
      "high-color": "#245bde",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
  };

  useEffect(() => {
    const initMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: selectedStyle,
        projection: "globe",
        zoom: 1.5,
        center: [-90, 40],
      });

      setMap(newMap);
    };

    const setFogSettings = () => {
      const fogSetting = fogSettings[selectedStyle];
      if (map && fogSetting) {
        map.setFog(fogSetting);
      }
    };

    if (!map) {
      initMap();
    } else {
      setInterval(() => {
        spinGlobe();
      }, 1000 / 60);
    }

    setFogSettings();

    return () => map?.remove();
  }, [map, selectedStyle]);

  const spinGlobe = () => {
    if (spinEnabled) {
      const zoom = map.getZoom();
      if (zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          // Slow spinning at higher zooms
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000 / 60, easing: (n) => n });
      }
    }
  };

  const handleInteraction = () => {
    if (spinEnabled) {
      setSpinEnabled(false);
    }
  };

  const handleInteractionComplete = () => {
    if (!spinEnabled) {
      setSpinEnabled(true);
      spinGlobe();
    }
  };

  const handleMapClick = (e) => {
    if (map && e.lngLat) {
      const { lng, lat } = e.lngLat;
      const location = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    }
  };

  const handleSelectChange = (event) => {
    const newStyle = event.target.value;
    setSelectedStyle(newStyle);

    if (map) {
      map.setStyle(newStyle);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={mapContainer}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: "-74%",
          width: "200%",
          zIndex: -1,
        }}
        onMouseDown={handleInteraction}
        onMouseUp={handleInteractionComplete}
        onMouseLeave={handleInteractionComplete}
        onTouchStart={handleInteraction}
        onTouchEnd={handleInteractionComplete}
        onClick={handleMapClick}
      />
      <div className={styles.dropdown}>
        <label htmlFor="styles">Choose a map style:</label>
        <select name="styles" id="styles" onChange={handleSelectChange}>
          <option value="mapbox://styles/mapbox/satellite-streets-v11">
            Satellite
          </option>
          <option value="mapbox://styles/mapbox/streets-v11">Streets</option>
          <option value="mapbox://styles/mapbox/outdoors-v11">Outdoors</option>
          <option value="mapbox://styles/mapbox/light-v10">Light</option>
          <option value="mapbox://styles/mapbox/dark-v10">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default Globe;
