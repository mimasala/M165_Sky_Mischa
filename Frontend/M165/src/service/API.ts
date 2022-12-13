import axios, { AxiosInstance } from "axios";

const baseURL = "http://127.0.0.1:5173/";

const headerConfig = {
  "Content-Type": "application/json",
};

export const configAPI: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers:headerConfig
});