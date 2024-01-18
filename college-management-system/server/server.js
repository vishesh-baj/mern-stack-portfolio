import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5050;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log("SERVER STARTED"));
  })
  .catch((error) => console.log(error.message));
