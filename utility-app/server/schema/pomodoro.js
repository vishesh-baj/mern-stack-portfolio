import mongoose from "mongoose";

const pomodoroSchema = mongoose.Schema({
  title: { type: String, required: true },
  breakTime: { type: Number, required: true, default: 2 },
  intervelTime: { type: Number, required: true, default: 25 },
  intervelCount: { type: Number, required: true, default: 4 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const PomodoroModel = mongoose.model("pomodoro", pomodoroSchema);
export default PomodoroModel;
