import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const QuoteModel = mongoose.model("quote", quoteSchema);
export default QuoteModel;
