import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String, required: true, default: "" },
  authors: { type: [String], required: true, default: [] },
  description: { type: String, required: true, default: "" },
  rating: { type: Number, required: true, default: 0 },
  imageUrl: { type: String, required: true, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
