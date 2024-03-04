import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const QuoteModel = mongoose.model("quote", quoteSchema);
export default QuoteModel;
