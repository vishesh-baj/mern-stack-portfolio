import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const TodoModal = mongoose.model("todo", todoSchema);

export default TodoModal;
