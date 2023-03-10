import { InputPrompt } from "../model/input-model.js";
import { openai } from "../config/openai.js";

const sendMessage = async (req, res) => {
  const openaiAI = openai.configuration();
  const inputModel = new InputPrompt(req.body);

  try {
    const response = await openaiAI.createCompletion(
      openai.textCompletion(inputModel)
    );

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error.response
        ? error.response.data
        : "There was an inssue on the server",
    });
  }
};

export { sendMessage };
