import Quiz from "../schema/quiz.js";

export const getAllQuiz = async (req, res) => {
  try {
    const allQuiz = await Quiz.find({});
    res.status(200).json(allQuiz);
  } catch (error) {
    res.status(400).json({ error: error.message, message: "error occured " });
  }
};
