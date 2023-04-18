export function parseItinerary(itineraryText) {
  const itineraryData = JSON.parse(itineraryText);
  return itineraryData.Itinerary;
}

export function findActivityByLocation(location, itinerary) {
  for (const day of itinerary) {
    for (const activity of day.Activities) {
      if (
        activity.Location.lat === location.lat &&
        activity.Location.lng === location.lng
      ) {
        return activity;
      }
    }
  }
}
