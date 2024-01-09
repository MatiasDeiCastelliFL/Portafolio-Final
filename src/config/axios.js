import axios from "axios";

export const urlAPi = axios.create({
  baseURL: "http://localhost:3001/",
});
