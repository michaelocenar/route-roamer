INSERT INTO users (name, avatar) VALUES ('Route Roamer', 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg');

INSERT INTO itinerary (user_id, description) VALUES (1, 'Amsterdam - 2 days');

INSERT INTO destinations (itinerary_id, name, description, image) VALUES (1, 'Amsterdam', 'Amsterdam for two days', 'public/tile-images/Istanbul.jpg');

INSERT INTO favourite_itinerary (user_id, itinerary_id) VALUES (1, 1);

INSERT INTO interests (user_id, name, description) VALUES (1, 'Amsterdam', 'Amsterdam - 2 days');

INSERT INTO itinerary_interests (itinerary_id, interest_id, user_id, description) VALUES (1, 1, 1, 'hiking');


INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (1, '2023-04-21', 'Day 1', 'Anne Frank House', '9:00 am', '52.3747', '4.8907', 'Visit the house of Anne Frank and learn about her life during World War II', 'Amsterdam'),
  (1, '2023-04-21', 'Day 1', 'Rijksmuseum', '12:00 pm', '52.3659', '4.8835', 'Visit the Rijksmuseum and explore its collection of Dutch masterpieces', 'Amsterdam'),
  (1, '2023-04-21', 'Day 1', 'Van Gogh Museum', '2:00 pm', '52.3584', '4.8817', 'Explore the Van Gogh Museum and its collection of the works of the Dutch master', 'Amsterdam'),
  (1, '2023-04-21', 'Day 1', 'Vondelpark', '4:00 pm', '52.3630', '4.8615', 'Take a stroll through the Vondelpark and enjoy the beautiful scenery', 'Amsterdam'),
  (1, '2023-04-22', 'Day 2', 'Dam Square', '9:00 am', '52.3730', '4.8925', 'Visit the Dam Square and explore the sights and sounds of Amsterdam', 'Amsterdam'),
  (1, '2023-04-22', 'Day 2', 'Canal Cruise', '11:00 am', '52.3690', '4.8922', 'Enjoy a canal cruise and explore Amsterdam from the water', 'Amsterdam'),
  (1, '2023-04-22', 'Day 2', 'Albert Cuyp Market', '1:00 pm', '52.3618', '4.8819', 'Visit the Albert Cuyp Market and find a variety of interesting items', 'Amsterdam'),
  (1, '2023-04-22', 'Day 2', 'Heineken Experience', '3:00 pm', '52.3480', '4.8944', 'Visit the Heineken Experience and learn about the history of the beer and brewing process', 'Amsterdam');


