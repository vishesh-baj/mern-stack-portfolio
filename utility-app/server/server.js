import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todo.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB CONNECTED");

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`SERVER STARTED AT PORT: ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// routes
app.use("/todos", todoRoutes);
