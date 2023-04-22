export const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const googleMapsLibraries = ["places"];


export function parseItinerary(itineraryText) {
  const itineraryData = JSON.parse(itineraryText);
  return itineraryData.Itinerary;
}

export const getPlaceId = (lat, lng) => {
  const geocoder = new window.google.maps.Geocoder();
  const latlng = new window.google.maps.LatLng(lat, lng);
  return new Promise((resolve, reject) => {
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          resolve(results[0].place_id);
        } else {
          reject("No results found");
        }
      } else {
        reject(`Geocoder failed due to: ${status}`);
      }
    });
  });
};