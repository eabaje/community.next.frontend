import { makeRequest } from "../helpers/axios";

const login = async (form) => {
  const requestPayload = {
    Email: form.Email,
    Password: form.Password,
  };

  const response = await makeRequest.post("auth/sigin", form);
  return response.data;
};

const register = async (form) => {
  const response = await makeRequest.post("auth/signup", form);
  return response.data;
};

const resetPassword = async (form) => {
  const response = await makeRequest.post("auth/reset", form);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser,
  resetPassword,
};

export default AuthService;
