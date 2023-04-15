const db = require("./db/connection");

db.query(
  'INSERT INTO itineraries (user_id, ',
  [map_title, map_description, image_url, user_id],
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Map ${result.id} inserted successfully`);
      res.send({ maps: result.rows[0] });
    }
  }
);