# RouteRoamer
Introducing RouteRoamer, an elegant and sophisticated web application designed to craft AI-curated travel itineraries tailored to your unique preferences. Delight in the convenience of discovering thoughtfully suggested activities, seamlessly integrated with Google Maps, to help you explore any destination across the globe with ease.

RouteRoamer was created using Next.js, OpenAI API, Google Maps API, MapboxAPI, and PostgreSQL. 

In the future, we plan to experiment with different AI models to reduce the response time from a minute to ideally <20 sdconds. We also aim to provide more detailed information about each location in the marker's infowindow in the map.

## Contributors 

[Jennifer Quintal](https://github.com/quinjenn) | [Namra Aslam](https://github.com/namraaslam) | [Michael Ocenar](https://github.com/michaelocenar)


## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required).

2. Clone this repository.

3. Install the requirements.

   ```bash
   $ npm install
   ```

4. Make a copy of the example environment variables file

   On Linux systems:

   ```bash
   $ cp .env.example .env
   ```

   On Windows:

   ```powershell
   $ copy .env.example .env
   ```

5. Add your [OpenAPI key](https://platform.openai.com/account/api-keys) to the newly created `.env` file, as well as your API key for the [Mapbox API key](https://www.mapbox.com/) and the [GoogleMaps API key](https://developers.google.com/maps/documentation/javascript/get-api-key).

6. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! 