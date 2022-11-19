import axios from "axios";
let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

export const makeRequest = axios.create({
  baseURL: `${API_URL}`,
  headers,
});
