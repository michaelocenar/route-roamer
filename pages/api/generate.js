import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
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
      temperature: 0.8,
      max_tokens: 200,
    });

    console.log("Completion data:", completion.data.choices[0]);
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
}

function generatePrompt(destination, startDate, endDate, budget, preferences) {
  const { activities, accommodation, transportation } = preferences;

  return `Create a suggested itinerary for a trip to ${destination} from ${startDate} to ${endDate} with a budget of $${budget}.
Optional preferences:
Also list restaurants that someone can go to in ${destination}.
Activities: ${activities || 'Not specified'}
Accommodation: ${accommodation || 'Not specified'}
Transportation: ${transportation || 'Not specified'}`;
}