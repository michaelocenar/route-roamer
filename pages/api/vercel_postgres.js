import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    await client.query('DELETE FROM itinerary_activities');
    await client.query('DELETE FROM destinations');
    await client.query('DELETE FROM itinerary');
    await client.query('DELETE FROM users');

    await client.query('CREATE TABLE IF NOT EXISTS users ( id SERIAL PRIMARY KEY NOT NULL, name VARCHAR(255) NOT NULL, avatar TEXT NOT NULL )');
    await client.query(`INSERT INTO users (id, name, avatar) VALUES (1, 'Route Roamer', 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg')`);
    await client.query('CREATE TABLE IF NOT EXISTS itinerary ( id SERIAL PRIMARY KEY NOT NULL, user_id INTEGER NOT NULL REFERENCES users(id), description TEXT NOT NULL )');
    await client.query('CREATE TABLE IF NOT EXISTS destinations ( id SERIAL PRIMARY KEY NOT NULL, itinerary_id INTEGER NOT NULL REFERENCES itinerary(id), name VARCHAR(255) NOT NULL, description TEXT, image VARCHAR(255) )');
    await client.query('CREATE TABLE IF NOT EXISTS itinerary_activities ( id SERIAL PRIMARY KEY NOT NULL, activity VARCHAR(255) NOT NULL, description TEXT NOT NULL, location TEXT NOT NULL, lat DECIMAL(9,6) NOT NULL, lng DECIMAL(9,6) NOT NULL, date DATE NOT NULL, label TEXT NOT NULL, time TIME NOT NULL, itinerary_id INTEGER NOT NULL REFERENCES itinerary(id) )');

    // Insert data into the "itinerary" table first
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (1, 1, 'Amsterdam - 2 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (2, 1, 'Istanbul - 4 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (3, 1, 'Miami - 3 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (4, 1, 'Paris - 4 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (5, 1, 'Hawaii - 5 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (6, 1, 'Tokyo - 6 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (7, 1, 'Toronto - 3 days')");
    await client.query("INSERT INTO itinerary (id, user_id, description) VALUES (8, 1, 'London - 4 days')");

    // Then insert data into the "destinations" table
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (1, 'Amsterdam', 'Amsterdam for two days', 'public/tile-images/Amsterdam.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (2, 'Istanbul', 'Istanbul for four days', 'public/tile-images/Istanbul2.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (3, 'Miami', 'Miami for three days', 'public/tile-images/Miami.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (4, 'Paris', 'Paris for four days', 'public/tile-images/Paris.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (5, 'Hawaii', 'Hawaii for five days', 'public/tile-images/Hawaii.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (6, 'Tokyo', 'Tokyo for six days', 'public/tile-images/Tokyo.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (7, 'Toronto', 'Toronto for three days', 'public/tile-images/Toronto.jpg')");
    await client.query("INSERT INTO destinations (itinerary_id, name, description, image) VALUES (8, 'London', 'London for four days', 'public/tile-images/London.jpg')");

    // Then insert data into the "itinerary_activities" table
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-21', 'Day 1', 'Anne Frank House', '9:00 am', '52.3747', '4.8907', 'Visit the house of Anne Frank and learn about her life during World War II', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-21', 'Day 1', 'Rijksmuseum', '12:00 pm', '52.3659', '4.8835', 'Visit the Rijksmuseum and explore its collection of Dutch masterpieces', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-21', 'Day 1', 'Van Gogh Museum', '2:00 pm', '52.3584', '4.8817', 'Explore the Van Gogh Museum and its collection of the works of the Dutch master', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-21', 'Day 1', 'Vondelpark', '4:00 pm', '52.3630', '4.8615', 'Take a stroll through the Vondelpark and enjoy the beautiful scenery', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-22', 'Day 2', 'Dam Square', '9:00 am', '52.3730', '4.8925', 'Visit the Dam Square and explore the sights and sounds of Amsterdam', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-22', 'Day 2', 'Canal Cruise', '11:00 am', '52.3690', '4.8922', 'Enjoy a canal cruise and explore Amsterdam from the water', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-22', 'Day 2', 'Albert Cuyp Market', '1:00 pm', '52.3618', '4.8819', 'Visit the Albert Cuyp Market and find a variety of interesting items', 'Amsterdam')");
    await client.query("INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) VALUES (1, '2023-04-22', 'Day 2', 'Heineken Experience', '3:00 pm', '52.3480', '4.8944', 'Visit the Heineken Experience and learn about the history of the beer and brewing process', 'Amsterdam')");


  } catch (error) {
    return response.status(500).json({ error: error.message });
  } finally {
    // Make sure to release the client after performing the operations
    client.release();
  }

  const users = await client.query('SELECT * FROM users');
  const itinerary = await client.query('SELECT * FROM itinerary');
  const destinations = await client.query('SELECT * FROM destinations');
  const itinerary_activities = await client.query('SELECT * FROM itinerary_activities');

  return response.status(200).json({ users, itinerary, destinations, itinerary_activities });
}
