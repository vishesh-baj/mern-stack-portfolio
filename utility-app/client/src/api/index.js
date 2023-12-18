import axios from "axios";
import { BASE_URL } from "../constants";

const token = localStorage.getItem("token");
export const API_INSTANCE = axios.create({
  BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});
