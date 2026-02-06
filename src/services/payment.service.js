import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/payment",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const createOrder = (data) =>
  API.post("/create-order", data);

export const verifyPayment = (data) =>
  API.post("/verify", data);

export const selectMethod = (data) =>
  API.post("/select-method", data);
