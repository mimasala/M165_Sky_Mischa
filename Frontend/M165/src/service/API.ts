import axios, { AxiosInstance } from "axios";


const headerConfig = {
  "Content-Type": "application/json",
};

export const configAPI = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL: baseURL,
    headers: headerConfig
  })
};
