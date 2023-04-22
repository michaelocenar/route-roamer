INSERT INTO users (name, avatar) VALUES ('Route Roamer', 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg');

INSERT INTO itinerary (user_id, description) VALUES (1, 'Amsterdam - 2 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Istanbul - 4 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Miami - 3 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Paris - 4 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Hawaii - 5 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Tokyo - 6 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'Toronto - 3 days');
INSERT INTO itinerary (user_id, description) VALUES (1, 'London - 4 days');


INSERT INTO destinations (itinerary_id, name, description, image) VALUES (1, 'Amsterdam', 'Amsterdam for two days', 'public/tile-images/Amsterdam.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (2, 'Istanbul', 'Istanbul for four days', 'public/tile-images/Istanbul2.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (3, 'Miami', 'Miami for three days', 'public/tile-images/Miami.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (4, 'Paris', 'Paris for four days', 'public/tile-images/Paris.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (5, 'Hawaii', 'Hawaii for five days', 'public/tile-images/Hawaii.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (6, 'Tokyo', 'Tokyo for six days', 'public/tile-images/Tokyo.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (7, 'Toronto', 'Toronto for three days', 'public/tile-images/Toronto.jpg');
INSERT INTO destinations (itinerary_id, name, description, image) VALUES (8, 'London', 'London for four days', 'public/tile-images/London.jpg');


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
  (2, '2023-07-06', 'Day 1', 'Hagia Sophia Museum', '9:00 am', '41.0082376', '28.9783589', 'Located in Sultanahmet, Hagia Sophia Museum is one of Turkey"s most popular tourist attractions. Built in 537 AD, the museum houses a variety of Byzantine artifacts and is a must-see for anyone visiting Istanbul.', 'Istanbul'),
  (2, '2023-07-06', 'Day 1', 'Blue Mosque', '11:30 am', '41.0052708', '28.9769617', 'Also known as the Sultan Ahmed Mosque, the Blue Mosque is a stunning example of Islamic architecture. The mosque is the only one to have six minarets and is one of the most iconic landmarks in the city.', 'Istanbul');
  (2, '2023-07-06', 'Day 1', 'Grand Bazaar', '12:30 pm', '41.0112553', '28.976295', 'The Grand Bazaar is a sprawling market in Istanbul filled with thousands of shops selling everything from spices to jewelry to souvenirs. It"s a great place to explore and bargain for unique items.', 'Istanbul'),
  (2, '2023-07-06', 'Day 1', 'Dolmabahce Palace', '5:00 pm', '41.0391155', '29.0072709', 'Dolmabahce Palace is a stunning example of Ottoman architecture. The palace is now a museum open to the public and offers a glimpse into the life of the Ottoman Sultans.', 'Istanbul'),
  (2, '2023-07-07', 'Day 2', 'Topkapi Palace', '9:00 am', '41.0151936', '28.9798428', 'Topkapi Palace is a sprawling complex of buildings and gardens that served as the home of the Ottoman Sultans. It"s now one of the city"s most popular tourist attractions and houses a variety of artifacts from the Ottoman Empire.', 'Istanbul'),
  (2, '2023-07-07', 'Day 2', 'Bosphorus Cruise', '11:30 am', '41.0151936', '28.9798428', 'A Bosphorus Cruise is a great way to explore Istanbul from the water. The cruise offers stunning views of the city skyline and a chance to see the city from a unique perspective.', 'Istanbul'),
  (2, '2023-07-07', 'Day 2', 'Istanbul Modern Museum', '3:00 pm', '41.0345899', '28.984054', 'The Istanbul Modern Museum is one of the city"s most popular contemporary art museums. The museum hosts a variety of exhibits and events and is a great place to explore if you"re interested in modern art.', 'Istanbul'),
  (2, '2023-07-07', 'Day 2', 'Galata Tower', '5:00 pm', '41.0235114', '28.976095', 'The Galata Tower is a medieval stone tower located in the heart of Istanbul. The tower offers stunning views of the city and is a great place to watch the sunset over the city skyline.', 'Istanbul'),
  (2, '2023-07-08', 'Day 3', 'Spice Bazaar', '9:00 am', '41.0171275', '28.9642599', 'The Spice Bazaar is a bustling market located in the Eminonu neighborhood of Istanbul. The market is filled with stalls selling everything from spices to souvenirs and is a great place to explore and shop for unique items.', 'Istanbul'),
  (2, '2023-07-08', 'Day 3', 'Basilica Cistern', '11:30 am', '41.011321', '28.9747205', 'The Basilica Cistern is an underground reservoir built in the 6th century. The cistern is one of the city"s most popular attractions and is a great place to explore the city"s history and its fascination with water.', 'Istanbul'),
  (2, '2023-07-08', 'Day 3', 'Istanbul Archaeology Museums', '2:00 pm', '41.0122561', '28.9812781', 'The Istanbul Archaeology Museums are a complex of three museums that house a variety of artifacts from the city"s history. The museums are a great place to explore the city"s past and are a must-see for any visitor.', 'Istanbul'),
  (2, '2023-07-08', 'Day 3', 'Taksim Square', '5:00 pm', '41.0360333', '28.9843881', 'Taksim Square is a bustling public square in the heart of Istanbul. The square is a great place to people-watch and explore the city"s vibrant nightlife.', 'Istanbul'),
  (2, '2023-07-09', 'Day 4', 'Prince Islands', '9:00 am', '40.8785593', '29.0981414', 'The Prince Islands are a group of nine islands located off the coast of Istanbul. The islands are a great place to explore the city"s history and enjoy a leisurely day of sightseeing and swimming in the turquoise waters of the Black Sea.', 'Istanbul'),
  (2, '2023-07-09', 'Day 4', 'Yerebatan Cistern', '2:00 pm', '41.0063941', '28.9764288', 'The Yerebatan Cistern is a stunning underground reservoir built in the 6th century. The cistern is filled with columns and is a great place to explore the city"s past and its fascination with water.', 'Istanbul');



INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (3, '2023-09-22', 'Day 1', 'Visit the Perez Art Museum Miami', '10:00 am', '25.776814', '-80.191762', 'Explore the Perez Art Museum Miami, which features contemporary art from North America, the Caribbean, and Latin America. This museum also has an outdoor sculpture garden, an auditorium, and a cafe.', 'Miami'),
  (3, '2023-09-22', 'Day 1', 'Stroll through Wynwood Walls', '2:00 pm', '25.79918', '-80.19909', 'Visit Wynwood Walls, an outdoor art gallery featuring murals from world-renowned street artists. This space is also home to numerous craft breweries, restaurants, and stores.', 'Miami'),
  (3, '2023-09-22', 'Day 1', 'Dine at Joe"s Stone Crab', '8:00 pm', '25.785277', '-80.135921', 'Treat yourself to a delicious meal at Joe"s Stone Crab, one of the most iconic restaurants in Miami. Joe"s offers a variety of seafood dishes, including their signature stone crab claws.', 'Miami'),
  (3, '2023-09-23', 'Day 2', 'Take a boat tour of Biscayne Bay', '10:00 am', '25.7564', '-80.1907', 'Climb aboard a boat and take in the sights of Biscayne Bay. Enjoy beautiful views of Miami"s stunning skyline and various islands, including Star and Fisher Islands.', 'Miami'),
  (3, '2023-04-23', 'Day 2', 'Visit the Vizcaya Museum and Gardens', '2:00 pm', '25.7548', '-80.1912', 'Explore the Vizcaya Museum and Gardens, which features a stunning Italian-style villa and 10 acres of lush gardens. Spend some time admiring the villa"s exquisite architecture and the gardens" exotic plants.', 'Miami'),
  (3, '2023-04-23', 'Day 2', 'Enjoy a show at the Adrienne Arsht Center', '8:00 pm', '25.7762', '-80.1904', 'Experience a show at the Adrienne Arsht Center, a premier performing arts venue in Miami. Here you can see a variety of performances, from plays and musicals to concerts and comedy shows.', 'Miami'),
  (3, '2023-04-24', 'Day 3', 'Go shopping on Lincoln Road', '10:00 am', '25.7858', '-80.1419', 'Go shopping on Lincoln Road, one of the most popular outdoor malls in Miami. Here you can find a variety of stores, from high-end retail outlets to small boutiques.', 'Miami'),
  (3, '2023-04-24', 'Day 3', 'Explore the Miami Seaquarium', '2:00 pm', '25.7451', '-80.1758', 'Spend the afternoon at the Miami Seaquarium, which features a variety of aquatic animals, including dolphins, sea turtles, and manatees. This park also has shows, exhibits, and rides.', 'Miami'),
  (3, '2023-04-24', 'Day 3', 'Dine at the River Oyster Bar', '7:00 pm', '25.7739', '-80.1955', 'Enjoy a delicious seafood dinner at the River Oyster Bar. This restaurant offers a variety of fresh seafood dishes, including oysters, crab cakes, and fish tacos.', 'Miami');


INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (4, '2023-06-08', 'Day 1', 'Eiffel Tower', '10:00 am', '48.8584', '2.2945', 'Climb the iconic Eiffel Tower and enjoy stunning views of the city.', 'Paris'),
  (4, '2023-06-08', 'Day 1', 'Notre-Dame Cathedral', '12:00 pm', '48.8530', '2.3498', 'Explore the stunning architecture of Notre-Dame Cathedral, one of the most famous churches in the world.', 'Paris'),
  (4, '2023-06-08', 'Day 1', 'Luxembourg Gardens', '2:00 pm', '48.8462', '2.3362', 'Relax in the beautiful gardens of the Luxembourg Palace and enjoy the serenity of this green oasis in the city.', 'Paris'),
  (4, '2023-06-08', 'Day 1', 'Louvre Museum', '5:00 pm', '48.8611', '2.3362', 'Visit the world-famous Louvre Museum and admire the masterpieces of art housed within the museum walls.', 'Paris'),
  (4, '2023-06-09', 'Day 2', 'Arc de Triomphe', '10:00 am', '48.8738', '2.2950', 'Climb the Arc de Triomphe and take in the stunning view of the city from the top.', 'Paris'),
  (4, '2023-06-09', 'Day 2', 'Champs-Élysées', '12:00 pm', '48.8714', '2.3020', 'Explore the iconic Champs-Élysées and its many shops, restaurants, and cafes.', 'Paris'),
  (4, '2023-06-09', 'Day 2', 'Sainte-Chapelle', '2:00 pm', '48.8559', '2.3463', 'Visit the beautiful Sainte-Chapelle, a Gothic masterpiece of stained-glass windows.', 'Paris'),
  (4, '2023-06-09', 'Day 2', 'Latin Quarter', '5:00 pm', '48.8511', '2.3420', 'Explore the Latin Quarter, one of the oldest and most vibrant areas of the city, and enjoy its many cafes and restaurants.', 'Paris'),
  (4, '2023-06-10', 'Day 3', 'Centre Pompidou', '10:00 am', '48.8617', '2.3522', 'Visit the Centre Pompidou, the largest museum of modern art in Europe, and enjoy the many masterpieces housed within its walls.', 'Paris'),
  (4, '2023-06-10', 'Day 3', 'Montmartre', '12:00 pm', '48.8884', '2.3435', 'Explore the charming Montmartre neighbourhood and visit the many galleries and cafes that line the cobblestone streets.', 'Paris'),
  (4, '2023-06-10', 'Day 3', 'Musée d"Orsay', '2:00 pm', '48.8610', '2.3265', 'Visit the Musée d"Orsay, the largest collection of impressionist and post-impressionist art in the world.', 'Paris'),
  (4, '2023-06-10', 'Day 3', 'Tuileries Garden', '5:00 pm', '48.8639', '2.3223', 'Relax in the beautiful Tuileries Garden and enjoy the serenity of this green oasis in the city.', 'Paris'),
  (4, '2023-06-11', 'Day 4', 'Versailles Palace', '10:00 am', '48.8050', '2.1200', 'Visit the majestic Versailles Palace, a symbol of the splendour of French royalty.', 'Paris'),
  (4, '2023-06-11', 'Day 4', 'Montparnasse Tower', '12:00 pm', '48.8398', '2.3233', 'Climb the Montparnasse Tower and enjoy spectacular views of the city from the top.', 'Paris'),
  (4, '2023-06-11', 'Day 4', 'Catacombs of Paris', '2:00 pm', '48.8367', '2.3620', 'Explore the Catacombs of Paris, a network of underground tombs and tunnels that span over 200 miles.', 'Paris'),
  (4, '2023-06-11', 'Day 4', 'Shopping', '5:00 pm', '48.8737', '2.2950', 'Enjoy some last-minute shopping in the city and pick up some souvenirs.', 'Paris');


INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (5, '2023-08-09', 'Day 1', 'Hike Diamond Head Crater', '10:00 am', '21.271935', '-157.824689', 'Go explore the Diamond Head Crater, a volcanic tuff cone and part of the Honolulu Volcanic Series of Oahu. The hike is moderately difficult and takes around 1.5-2 hours.', 'Hawaii'),
  (5, '2023-08-09', 'Day 1', 'Explore Waikiki Beach', '2:00 pm', '21.27641', '-157.829527', 'Spend some time at the beautiful Waikiki Beach. Relax on the shore, go for a swim, or take part in a variety of water sports.', 'Hawaii'),
  (5, '2023-08-10', 'Day 2', 'Visit the Polynesian Cultural Center', '9:00 am', '21.632064', '-158.054208', 'Explore the Polynesian Cultural Center, which offers various educational activities, live performances, and cultural exhibits.', 'Hawaii'),
  (5, '2023-08-10', 'Day 2', 'Go Shopping at Ala Moana Shopping Center', '5:00 pm', '21.290562', '-157.856153', 'Go shopping at the Ala Moana Shopping Center, which is the largest open-air shopping center in the world.', 'Hawaii'),
  (5, '2023-08-11', 'Day 3', 'Visit Hanauma Bay Nature Preserve', '9:00 am', '21.287071', '-157.699753', 'Take a trip to the Hanauma Bay Nature Preserve, a protected marine life conservation area. Go snorkeling to explore the rich marine life in the bay.', 'Hawaii'),
  (5, '2023-08-11', 'Day 3', 'Explore Chinatown Honolulu', '2:00 pm', '21.310333', '-157.863525', '   Explore Chinatown Honolulu, which is the oldest Chinatown in the United States. Visit the various shops, restaurants, and markets in the area.', 'Hawaii'),
  (5, '2023-08-12', 'Day 4', 'Visit the USS Arizona Memorial', '9:00 am', '21.327023', '-157.975812', 'Visit the USS Arizona Memorial, which commemorates the attack on Pearl Harbor during World War II.', 'Hawaii'),
  (5, '2023-08-12', 'Day 4', 'Go to the Waimea Valley Adventure Park', '2:00 pm', '21.655837', '-158.092856', 'Explore the Waimea Valley Adventure Park, which consists of botanical gardens, a waterfall, and various cultural sites', 'Hawaii'),
  (5, '2023-08-13', 'Day 5', 'Visit the Bishop Museum', '10:00 am', '21.325739', '-157.88069', 'Visit the Bishop Museum, which is the largest museum in Hawaii and houses various cultural artifacts and natural history specimens.', 'Hawaii'),
  (5, '2023-08-13', 'Day 5', 'Go to the Honolulu Zoo', '3:00 pm', '21.310996', '-157.845635', 'Visit the Honolulu Zoo, which houses various exotic animals from around the world.', 'Hawaii');



INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (6, '2023-08-30', 'Day 1', 'Sensoji Temple', '9:00 am', '35.7147', '139.7967', 'Explore Sensoji Temple, the most visited Buddhist temple in Tokyo, and its surrounding shopping street, Nakamise Dori.', 'Tokyo'),
  (6, '2023-08-30', 'Day 1', 'Ueno Park', '1:00 pm', '35.7127', '139.7756', 'Visit Ueno Park, a large public park with a variety of attractions, including a zoo, art galleries and temples.', 'Tokyo'),
  (6, '2023-08-30', 'Day 1', 'Shibuya Crossing', '5:00 pm', '35.6585', '139.7016', 'Experience the famous Shibuya Crossing, a large scramble crossing of six streets filled with neon lights and lively crowds.', 'Tokyo'),
  (6, '2023-08-31', 'Day 2', 'Tokyo Skytree', '9:00 am', '35.7100', '139.8107', 'View the city of Tokyo from the observation deck of the Tokyo Skytree, the tallest tower in the world.', 'Tokyo'),
  (6, '2023-08-31', 'Day 2', 'Meiji Shrine', '1:00 pm', '35.6700', '139.7007', 'Visit Meiji Shrine, the largest Shinto shrine in Tokyo, and explore the surrounding Yoyogi Park.', 'Tokyo'),
  (6, '2023-08-31', 'Day 2', 'Akihabara', '5:00 pm', '35.6987', '139.7730', 'Experience the colorful stores and arcades of Akihabara, Tokyo"s electric town.', 'Tokyo'),
  (6, '2023-09-01', 'Day 3', 'Tsukiji Fish Market', '9:00 am', '35.6652', '139.7633', 'Explore the Tsukiji Fish Market, one of the largest fish markets in the world.', 'Tokyo'),
  (6, '2023-09-01', 'Day 3', 'Harajuku', '1:00 pm', '35.6700', '139.7109', 'Visit Harajuku, Tokyo"s fashion district and home of the famous Takeshita-dori shopping street.', 'Tokyo'),
  (6, '2023-09-01', 'Day 3', 'Roppongi Hills', '5:00 pm', '35.6641', '139.7318', 'Explore Roppongi Hills, a complex of shops, restaurants and galleries with a beautiful observation deck.', 'Tokyo'),
  (6, '2023-09-02', 'Day 4', 'Imperial Palace', '9:00 am', '35.6845', '139.7528', 'Visit the Imperial Palace, the former home of the Japanese emperor and his family.', 'Tokyo'),
  (6, '2023-09-02', 'Day 4', 'Shinjuku Gyoen National Garden', '1:00 pm', '35.6823', '139.7095', 'Relax in Shinjuku Gyoen National Garden, a large park with three distinct styles of gardens.', 'Tokyo'),
  (6, '2023-09-02', 'Day 4', 'Odaiba', '5:00 pm', '35.6283', '139.7780', 'Explore Odaiba, an artificial island with a variety of attractions, including a replica of the Statue of Liberty.', 'Tokyo'),
  (6, '2023-09-01', 'Day 5', 'Kabukicho', '9:00 am', '35.6937', '139.7032', 'Explore Kabukicho, Tokyo"s entertainment district, and its many shops, bars, and restaurants.', 'Tokyo'),
  (6, '2023-09-01', 'Day 5', 'Ginza', '1:00 pm', '35.6711', '139.7660', 'Visit Ginza, Tokyo"s most luxurious shopping district, and explore its many high-end stores, boutiques and restaurants.', 'Tokyo'),
  (6, '2023-09-01', 'Day 5', 'TeamLab Borderless', '5:00 pm', '35.6590', '139.8051', 'Experience the art and digital installations of TeamLab Borderless, a large interactive art museum.', 'Tokyo'),
  (6, '2023-09-02', 'Day 6', 'Edo-Tokyo Museum', '9:00 am', '35.6858', '139.7717', 'Visit the Edo-Tokyo Museum, a museum dedicated to the history of the city of Tokyo.', 'Tokyo'),
  (6, '2023-09-02', 'Day 6', 'Ameyoko Market', '1:00 pm', '35.7043', '139.7730', 'Explore the Ameyoko Market, an open-air market with a variety of street food and souvenirs.', 'Tokyo'),
  (6, '2023-09-02', 'Day 6', 'Tokyo Tower', '5:00 pm', '35.6586', '139.7454', 'Visit Tokyo Tower, a communications and observation tower modelled after the Eiffel Tower.', 'Tokyo');




INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (7, '2023-05-12', 'Day 1', 'CN Tower Edge Walk', '9:00 am', '43.6426', '-79.3871', 'Experience the edge walk at the CN Tower and take in the amazing views of Toronto from the top of the tower.', 'Toronto'),
  (7, '2023-05-12', 'Day 1', 'Lunch at St. Lawrence Market', '12:00 pm', '43.6475', '-79.3743', 'Grab a bite to eat at St. Lawrence Market, one of Toronto"s most popular markets known for its selection of fresh produce, local eats, and artisanal goods.', 'Toronto'),
  (7, '2023-05-12', 'Day 1', 'Explore the Distillery District', '2:00 pm', '43.6509', '-79.3577', 'Take a stroll through the Distillery District, a historic neighbourhood filled with cobblestone streets, independent galleries, and unique boutiques.', 'Toronto'),
  (7, '2023-05-12', 'Day 1', 'Hockey Hall of Fame', '4:00 pm', '43.6468', '-79.3766', 'Visit the Hockey Hall of Fame to learn about the history of the sport, explore interactive exhibits, and take a picture with the Stanley Cup.', 'Toronto'),
  (7, '2023-05-12', 'Day 1', 'Dinner at Kinton Ramen', '6:00 pm', '43.6536', '-79.3935',  'Stop by Kinton Ramen for a delicious bowl of ramen and other Japanese dishes. Be sure to try one of their signature ramen bowls!', 'Toronto'),
  (7, '2023-05-12', 'Day 1', 'Ripley"s Aquarium', '8:00 pm', '43.6453', '-79.3804', 'Spend the evening at Ripley"s Aquarium, where you can explore the different marine life and take in the beautiful underwater views.', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Royal Ontario Museum', '9:00 am', '43.6700', '-79.3931', 'Start your day off at the Royal Ontario Museum, where you can explore the different exhibitions and take in the history of the museum.', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Kensington Market', '11:00 am', '43.6545', '-79.4086', 'Head over to Kensington Market, one of Toronto"s most vibrant neighbourhoods filled with unique shops, cafes, and local eateries.', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Lunch at La Carnita', '1:00 pm', '43.6545', '-79.4076', 'Grab a bite to eat at La Carnita, a popular Mexican restaurant known for their delicious tacos and unique drinks.', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Explore the Toronto Islands', '3:00 pm', '43.6219', '-79.3790', 'Take a ferry to the Toronto Islands and explore the area. Take a walk around the island and take in the beautiful scenery.', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Dinner at Queen Margherita Pizza', '6:00 pm', '43.6618', '-79.4138', 'Stop by Queen Margherita Pizza for a delicious wood-fired pizza. Be sure to try one of their signature margherita pizzas!', 'Toronto'),
  (7, '2023-05-13', 'Day 2', 'Ripley"s Believe It or Not!', '8:00 pm', '43.6443', '-79.3763', 'Visit Ripley"s Believe It or Not! and explore the strange and bizarre exhibits. Be sure to check out their mirror maze and other interactive attractions!', 'Toronto'),
  (7, '2023-05-14', 'Day 3', 'High Park', '9:00 am', '43.6520', '-79.4674', 'Head over to High Park for a morning walk and take in the beautiful scenery and views of the lake.', 'Toronto'),
  (7, '2023-05-14', 'Day 3', 'Lunch at The Burger"s Priest', '11:00 am', '43.6608', '-79.3763', 'Grab a bite to eat at The Burger"s Priest, a popular burger joint known for their delicious burgers and unique toppings.', 'Toronto'),
  (7, '2023-05-14', 'Day 3', 'Bata Shoe Museum', '1:00 pm', '43.6704', '-79.3945', 'Visit the Bata Shoe Museum and explore the different exhibitions featuring shoes from all around the world.', 'Toronto'),
  (7, '2023-05-14', 'Day 3', 'Explore the Financial District', '3:00 pm', '43.6488', '-79.3801', 'Take a walk through the Financial District and explore the different shops and attractions in the area.', 'Toronto'),
  (7, '2023-05-14', 'Day 3', 'Dinner at The Keg Steakhouse', '5:00 pm', '43.6452', '-79.3803', 'Stop by The Keg Steakhouse for a delicious steak dinner. Be sure to try one of their signature steaks!', 'Toronto');

  
INSERT INTO itinerary_activities (itinerary_id, date, label, activity, time, lat, lng, description, location) 
VALUES 
  (8, '2023-05-04', 'Day 1', 'Tower of London', '10:00 am', '51.508039', '-0.075919', 'Visit the historic Tower of London, a 900-year-old castle and fortress that houses the Crown Jewels and the Royal Armouries.', 'London'),
  (8, '2023-05-04', 'Day 1', 'Big Ben', '2:00 pm', '51.5007292', '-0.1268141', 'Visit the iconic clock tower and see the stunning views of the London skyline from the top.', 'London'),
  (8, '2023-05-04', 'Day 1', 'London Eye', '5:00 pm', '51.503324', '-0.119543', 'Experience the breathtaking panoramic views of London from the London Eye and take a ride on the tallest Ferris wheel in Europe.', 'London'),
  (9, '2023-05-05', 'Day 2', 'Westminster Abbey', '10:00 am', '51.499581', '-0.127758', 'Explore the Gothic masterpiece of Westminster Abbey, the site of coronations and royal weddings since 1066.', 'London'),
  (8, '2023-05-05', 'Day 2', 'Buckingham Palace', '2:00 pm', '51.501364', '-0.14189', 'Visit the official residence of the British monarch and take a tour of the palace and its state rooms.', 'London'),
  (8, '2023-05-05', 'Day 2', 'St. Paul"s Cathedral"', '5:00 pm', '51.5138', '-0.0983', 'Visit this iconic cathedral with its breathtaking dome and stunning interiors.', 'London'),
  (8, '2023-05-06', 'Day 3', 'Natural History Museum', '10:00 am', '51.4977', '-0.1752', 'Explore the fascinating collections of the Natural History Museum and learn about the history of the Earth and its inhabitants.', 'London'),
  (8, '2023-05-06', 'Day 3', 'British Museum', '2:00 pm', '51.519', '-0.1269', 'Visit the world-famous British Museum and explore the wonders of the ancient world and its civilizations.', 'London'),
  (8, '2023-05-06', 'Day 3', 'Trafalgar Square', '5:00 pm', '51.5079', '-0.1280', 'Visit this iconic square in the heart of London and see the impressive Nelson"s Column, fountains and statues.', 'London'),
  (8, '2023-05-07', 'Day 4', 'Hyde Park', '10:00 am', '51.5073', '-0.1658', 'Visit London"s largest park and take a stroll in the picturesque gardens and admire the beautiful monuments and sculptures.', 'London'),
  (8, '2023-05-07', 'Day 4', 'Covent Garden', '2:00 pm', '51.5128', '-0.1238', 'Visit this iconic market and enjoy the vibrant atmosphere and explore the many boutiques, shops and cafes.', 'London'),
  (8, '2023-05-07', 'Day 4', 'Piccadilly Circus', '5:00 pm', '51.5104', '-0.1351', 'Visit this bustling area and take in the stunning architecture and the vibrant atmosphere of this iconic London landmark.', 'London');

