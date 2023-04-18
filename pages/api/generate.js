import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const {
    destination,
    startDate,
    endDate,
    budget,
    preferences,
  } = req.body;

  if (!destination || !startDate || !endDate || !budget) {
    res.status(400).json({
      error: {
        message: "Please provide all required fields: destination, start date, end date, and budget",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(destination, startDate, endDate, budget, preferences),
      temperature: 0.7,
      max_tokens: 2000,
    });

    console.log("Completion data:", completion.data);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
};

function generatePrompt(destination, startDate, endDate, budget, preferences) {
  const { activities, accommodation, transportation } = preferences;

  return `Create a suggested itinerary for a trip to ${destination} from ${startDate} to ${endDate} with a budget of $${budget}. Return the itinerary in JSON format using the following structure:

  {
    "Itinerary": [
      {
        "Date": "Date of the activities",
        "Activities": [
          {
            "Time": "Suggested time for the activity",
            "Activity": "Activity name",
            "Location": {
              "lat": "Latitude of the activity in decimal format",
              "lng": "Longitude of the activity in decimal format"
            },
            "Description": "Activity description"
          }
        ]
      }
    ]
  }
  
  Optional preferences:
  Activities: ${activities || 'Not specified'}
  Accommodation: ${accommodation || 'Not specified'}
  Transportation: ${transportation || 'Not specified'}`;
}
