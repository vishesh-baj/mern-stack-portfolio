import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const NotesModal = mongoose.model("note", notesSchema);
export default NotesModal;
