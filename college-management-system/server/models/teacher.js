import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  class: { type: Number, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
});

const TeacherModel = mongoose.model("teacher", teacherSchema);
export default TeacherModel;
