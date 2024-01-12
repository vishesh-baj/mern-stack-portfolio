import dotEnv from "dotenv";
dotEnv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import managementRoutes from "./routes/management.js";
import teacherRoutes from "./routes/teacher.js";
const app = express();

// db connection
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`SERVER STARTED AT PORT: ${PORT}`));
  })
  .catch((error) => console.log("ERROR OCCURED: ", error));

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/management", managementRoutes);
app.use("/teacher", teacherRoutes);
