import axios from "axios";
import { API_URL } from "../constants";
let headers = {};

if (typeof window !== "undefined" && localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

export const makeRequest = axios.create({
  baseURL: `${API_URL}`,
  headers,
});
