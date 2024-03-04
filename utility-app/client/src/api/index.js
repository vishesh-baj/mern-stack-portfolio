import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const API_INSTANCE = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
  headers,
});

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
  },
);
