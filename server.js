const express = require("express");
const next = require("next");
const generateItinerary = require(".api/generate");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom API route for generating itinerary
  server.post("/api/generate", async (req, res) => {
    server.post("api/generate", generateItinerary);
  });

  // Default Next.js request handler
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
