INSERT INTO users (name, avatar) VALUES ('Route Roamer', 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg');

INSERT INTO itinerary (user_id, description) VALUES (1, 'Amsterdam - 2 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Istanbul - 4 days');


INSERT INTO destinations (itinerary_id, name, description, image) VALUES (1, 'Amsterdam', 'Amsterdam for two days', 'public/tile-images/Amsterdam.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (3, 'Istanbul', 'Istanbul for four days', 'public/tile-images/Istanbul2.jpg');


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



INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (3, '2023-07-06', 'Day 1', 'Hagia Sophia Museum', '9:00 am', '41.0082376', '28.9783589', 'Located in Sultanahmet, Hagia Sophia Museum is one of Turkey"s most popular tourist attractions. Built in 537 AD, the museum houses a variety of Byzantine artifacts and is a must-see for anyone visiting Istanbul.', 'Istanbul'),
  (3, '2023-07-06', 'Day 1', 'Blue Mosque', '11:30 am', '41.0052708', '28.9769617', 'Also known as the Sultan Ahmed Mosque, the Blue Mosque is a stunning example of Islamic architecture. The mosque is the only one to have six minarets and is one of the most iconic landmarks in the city.', 'Istanbul');
  (3, '2023-07-06', 'Day 1', 'Grand Bazaar', '12:30 pm', '41.0112553', '28.976295', 'The Grand Bazaar is a sprawling market in Istanbul filled with thousands of shops selling everything from spices to jewelry to souvenirs. It"s a great place to explore and bargain for unique items.', 'Istanbul'),
  (3, '2023-07-06', 'Day 1', 'Dolmabahce Palace', '5:00 pm', '41.0391155', '29.0072709', 'Dolmabahce Palace is a stunning example of Ottoman architecture. The palace is now a museum open to the public and offers a glimpse into the life of the Ottoman Sultans.', 'Istanbul'),
  (3, '2023-07-07', 'Day 2', 'Topkapi Palace', '9:00 am', '41.0151936', '28.9798428', 'Topkapi Palace is a sprawling complex of buildings and gardens that served as the home of the Ottoman Sultans. It"s now one of the city"s most popular tourist attractions and houses a variety of artifacts from the Ottoman Empire.', 'Istanbul'),
  (3, '2023-07-07', 'Day 2', 'Bosphorus Cruise', '11:30 am', '41.0151936', '28.9798428', 'A Bosphorus Cruise is a great way to explore Istanbul from the water. The cruise offers stunning views of the city skyline and a chance to see the city from a unique perspective.', 'Istanbul'),
  (3, '2023-07-07', 'Day 2', 'Istanbul Modern Museum', '3:00 pm', '41.0345899', '28.984054', 'The Istanbul Modern Museum is one of the city"s most popular contemporary art museums. The museum hosts a variety of exhibits and events and is a great place to explore if you"re interested in modern art.', 'Istanbul'),
  (3, '2023-07-07', 'Day 2', 'Galata Tower', '5:00 pm', '41.0235114', '28.976095', 'The Galata Tower is a medieval stone tower located in the heart of Istanbul. The tower offers stunning views of the city and is a great place to watch the sunset over the city skyline.', 'Istanbul'),
  (3, '2023-07-08', 'Day 3', 'Spice Bazaar', '9:00 am', '41.0171275', '28.9642599', 'The Spice Bazaar is a bustling market located in the Eminonu neighborhood of Istanbul. The market is filled with stalls selling everything from spices to souvenirs and is a great place to explore and shop for unique items.', 'Istanbul'),
  (3, '2023-07-08', 'Day 3', 'Basilica Cistern', '11:30 am', '41.011321', '28.9747205', 'The Basilica Cistern is an underground reservoir built in the 6th century. The cistern is one of the city"s most popular attractions and is a great place to explore the city"s history and its fascination with water.', 'Istanbul'),
  (3, '2023-07-08', 'Day 3', 'Istanbul Archaeology Museums', '2:00 pm', '41.0122561', '28.9812781', 'The Istanbul Archaeology Museums are a complex of three museums that house a variety of artifacts from the city"s history. The museums are a great place to explore the city"s past and are a must-see for any visitor.', 'Istanbul'),
  (3, '2023-07-08', 'Day 3', 'Taksim Square', '5:00 pm', '41.0360333', '28.9843881', 'Taksim Square is a bustling public square in the heart of Istanbul. The square is a great place to people-watch and explore the city"s vibrant nightlife.', 'Istanbul'),
  (3, '2023-07-09', 'Day 4', 'Prince Islands', '9:00 am', '40.8785593', '29.0981414', 'The Prince Islands are a group of nine islands located off the coast of Istanbul. The islands are a great place to explore the city"s history and enjoy a leisurely day of sightseeing and swimming in the turquoise waters of the Black Sea.', 'Istanbul'),
  (3, '2023-07-09', 'Day 4', 'Yerebatan Cistern', '2:00 pm', '41.0063941', '28.9764288', 'The Yerebatan Cistern is a stunning underground reservoir built in the 6th century. The cistern is filled with columns and is a great place to explore the city"s past and its fascination with water.', 'Istanbul');


