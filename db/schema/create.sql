DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS itinerary CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS itinerary_interests CASCADE;
DROP TABLE IF EXISTS itinerary_requests CASCADE;
DROP TABLE IF EXISTS itinerary_activities CASCADE;
DROP TABLE IF EXISTS favourite_itinerary CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar TEXT NOT NULL
);

CREATE TABLE itinerary (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  description TEXT NOT NULL
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itinerary(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255)
); 

CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE itinerary_interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  description TEXT,
  itinerary_id INTEGER NOT NULL REFERENCES itinerary(id),
  interest_id INTEGER NOT NULL REFERENCES interests(id)
);

CREATE TABLE itinerary_requests (
  id SERIAL PRIMARY KEY NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itinerary(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  budget NUMERIC(10,2),
  destination TEXT
);

CREATE TABLE itinerary_activities  (
  id SERIAL PRIMARY KEY NOT NULL,
  activity VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  lat DECIMAL(9,6) NOT NULL,
  lng DECIMAL(9,6) NOT NULL,
  date DATE NOT NULL,
  label TEXT NOT NULL,
  time TIME NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itinerary(id),
  interest_id INTEGER REFERENCES interests(id)
);

CREATE TABLE favourite_itinerary (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  itinerary_id INTEGER NOT NULL REFERENCES itinerary(id)
);

