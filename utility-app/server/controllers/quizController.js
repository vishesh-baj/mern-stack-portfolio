import Quiz from "../schema/quiz.js";

export const getAllQuiz = async (req, res) => {
  try {
    const allQuiz = await Quiz.find({ user: req.user });
    if (!allQuiz) {
      return res.status(400).json({ message: "Unable to get all quizes" });
    }
    res.status(200).json(allQuiz);
  } catch (error) {
    res.status(400).json({ error: error.message, message: "error occured " });
  }
};

export const addQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz({ ...req.body, user: req.user });
    res
      .status(200)
      .json({ message: "Quiz added successfully", addedQuiz: newQuiz });
  } catch (error) {
    res.status(400).json({ error: error.message, message: "error occured" });
  }
};
