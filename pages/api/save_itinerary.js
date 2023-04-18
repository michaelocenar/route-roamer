const db = require("./db/connection");

activityArray.forEach((activity) => {
  const query = `INSERT INTO itinerary_activities (time, lat, lng, description) VALUES ($1, $2, $3, $4)`;
  const values = [time, itinerary_activities.latitude, itinerary_activities.longitude, activity.description];

  db.query(query, values, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Activity inserted successfully`);
    }
  });
});