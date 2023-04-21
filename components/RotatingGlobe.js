import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

console.log("mapboxgl", mapboxgl);
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;



const Globe = () => {
  const [map, setMap] = useState(null);
  const [spinEnabled, setSpinEnabled] = useState(true);
  const mapContainer = useRef(null);

  // The following values can be changed to control rotation speed:
  const secondsPerRevolution = 1000;
  const maxSpinZoom = 3;
  const slowSpinZoom = 1;

  useEffect(() => {
    const initMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-v9",
        projection: "globe",
        zoom: 1.5,
        center: [-90, 40],
      });

      newMap.on("load", () => {
        newMap.setFog({
          range: [0.1, 6],
          color: "#dc9f9f",
          "horizon-blend": 0.3,
          "high-color": "#245bde",
          "space-color": "#000000",
          "star-intensity": 0.15,
        });
      });

      newMap.on("styledata", () => {
        newMap.setFog({});
      });

      setMap(newMap);
    };

    if (!map) {
      initMap();
    } else {
      setInterval(() => {
        spinGlobe();
      }, 1000 / 60);
    }

    return () => map?.remove();
  }, [map]);

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
      const location = new mapboxgl.LngLat(lng, lat);
      map.flyTo({ center: location, zoom: 10 });
      // Add a marker at the clicked location
      new mapboxgl.Marker().setLngLat(location).addTo(map);
    }
  };

  return (
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
  );
};

export default Globe;