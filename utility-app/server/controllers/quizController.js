import Quiz from "../schema/quiz.js";
export const getAllQuiz = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message, message: "error occured " });
  }
};
