# OpenAI API Quickstart - Node.js example app

Users can create an AI-generated, personalized travel itinerary for anywhere around the world and suggested activities will appear on Google Maps.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Install the requirements

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

5. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

6. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
