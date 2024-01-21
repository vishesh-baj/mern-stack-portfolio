import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/student.js";
import teacherRoutes from "./routes/teacher.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
  })
  .catch((error) => console.log(error.message));

app.use("/auth", authRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
