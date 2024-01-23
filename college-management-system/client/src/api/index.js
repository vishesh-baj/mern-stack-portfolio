import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const API_INSTANCE = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers,
});

// there should be a corfue for the fucking fuck this life is gouing about. I dont have a clue
API_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
