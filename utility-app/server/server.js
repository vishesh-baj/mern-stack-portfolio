import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todo.js";
import authRoutes from "./routes/auth.js";
import noteRoutes from "./routes/note.js";
import colorPaletteRoutes from "./routes/colorPalette.js";
import pomodoroRoutes from "./routes/pomodoro.js";
import countRoutes from "./routes/counts.js";
import bookRoutes from "./routes/book.js";
import quoteRoutes from "./routes/quote.js";
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
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/palette", colorPaletteRoutes);
app.use("/pomodoro", pomodoroRoutes);
app.use("/counts", countRoutes);
app.use("/book", bookRoutes);
app.use("/quote", quoteRoutes);
