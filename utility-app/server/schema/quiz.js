import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
});

const QuizModal = mongoose.model("quiz", quizSchema);

export default QuizModal;
