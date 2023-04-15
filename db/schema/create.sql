DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS itineraries CASCADE;
DROP TABLE IF EXISTS destinations CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS itinerary_interests CASCADE;
DROP TABLE IF EXISTS itinerary_requests CASCADE;
DROP TABLE IF EXISTS itinerary_activities CASCADE;
DROP TABLE IF EXISTS favourite_itineraries CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL
);

CREATE TABLE itineraries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  description TEXT NOT NULL
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itineraries(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  latitude DECIMAL(9,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
); 

CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE itinerary_interests (
  id SERIAL PRIMARY KEY NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itineraries(id),
  interest_id INTEGER NOT NULL REFERENCES interests(id)
);

CREATE TABLE itinerary_requests (
  id SERIAL PRIMARY KEY NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itineraries(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  budget NUMERIC(10,2),
  destination TEXT
);

CREATE TABLE itinerary_activities  (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  location TEXT,
  latitude DECIMAL(9,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  itinerary_id INTEGER NOT NULL REFERENCES itineraries(id),
  interest_id INTEGER REFERENCES interests(id)
);

CREATE TABLE favourite_itineraries (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  itinerary_id INTEGER NOT NULL REFERENCES itineraries(id)
);

