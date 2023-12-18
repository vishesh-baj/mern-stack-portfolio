import axios from "axios";

const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
};

if (token) {
  headers.Authorization = token;
}

export const API_INSTANCE = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
  headers,
});
