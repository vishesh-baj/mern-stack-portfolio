import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import mongoose from "mongoose";
dotEnv.config();

const app = express();

// db connection
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log("SERVER STARTED"));
  })
  .catch((error) => console.log("ERROR OCCURED: ", error));
