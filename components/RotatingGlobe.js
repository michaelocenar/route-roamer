import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibmFtcmFhIiwiYSI6ImNsZ2xuZjFrdzFxaHEzbG1vNHRzcDZwY2IifQ.5eNER4emz4xPuuDwAQLfKA';

const Globe = () => {
const [map, setMap] = useState(null);
const [spinEnabled, setSpinEnabled] = useState(true);
const mapContainer = useRef(null);

// The following values can be changed to control rotation speed:
const secondsPerRevolution = 120;
const maxSpinZoom = 5;
const slowSpinZoom = 3;

useEffect(() => {
const initMap = () => {
const newMap = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/satellite-v9',
projection: 'globe',
zoom: 1.5,
center: [-90, 40],
});


newMap.on('load', () => {
    newMap.setFog({}); // Set the default atmosphere style
  });

  newMap.on('styledata', () => {
    newMap.setFog({}); // Set the default atmosphere style
  });

  setMap(newMap);
};

if (!map) {
  initMap();
} else {
  spinGlobe();
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
// Smoothly animate the map over one second.
// When this animation is complete, it calls a 'moveend' event.
map.easeTo({ center, duration: 1000, easing: (n) => n });
}
}
};

const handleSpinButtonClick = () => {
setSpinEnabled(!spinEnabled);
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

return (
<div style={{ position: 'relative' }}>
<div ref={mapContainer} style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} onMouseDown={handleInteraction} onMouseUp={handleInteractionComplete} onMouseLeave={handleInteractionComplete} onTouchStart={handleInteraction} onTouchEnd={handleInteractionComplete} />
<button style={{ position: 'absolute', top: 20, left: '50%', zIndex: 1, border: 'none', width: 200, marginLeft: -100, display: 'block', cursor: 'pointer', padding: '10px 20px', borderRadius: 3, backgroundColor: spinEnabled ? '#3386c0' : '#4ea0da', color: '#fff', fontWeight: 'bold', lineHeight: '20px' }} onClick={handleSpinButtonClick}>{spinEnabled ? 'Pause rotation' : 'Start rotation'}</button>
</div>
);
};

export default Globe;