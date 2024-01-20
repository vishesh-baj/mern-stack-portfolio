import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  class: { type: String, required: true },
  section: { type: String, required: true },
  contactNumber: { type: Number, required: true },
});

const TeacherModal = mongoose.model("teacher", teacherSchema);
export default TeacherModal;
