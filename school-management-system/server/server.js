import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`PORT STARTED AT ${PORT}`));
  })
  .catch((error) => console.log("error: ", error.message));
