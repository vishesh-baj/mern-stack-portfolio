import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "https://localhost:8080.com",
  headers: {
    "Content-Type": "application/json",
  },
});

API_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

