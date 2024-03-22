import Quiz from "../schema/quiz.js";

export const getAllQuiz = async (req, res) => {
  const user = req.user;
  try {
    const allQuiz = await Quiz.find({ user: req.user });
    res.status(200).json(allQuiz);
  } catch (error) {
    res.status(400).json({ error: error.message, message: "error occured " });
  }
};
