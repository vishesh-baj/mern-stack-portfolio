import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  class: { type: Number, required: true },
  section: { type: String, required: true },
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "teacher" },
  contactNumber: { type: Number, required: true },
});

const StudentModel = mongoose.model("student", studentSchema);
export default StudentModel;
