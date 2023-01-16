import { makeRequest } from "../helpers/axios";

const findAll = async () => {
  const response = await makeRequest.get("/tutorials");
  return response.data;
};

const findById = async (id) => {
  const response = await makeRequest.get(`/tutorials/${id}`);
  return response.data;
};

const findByTitle = async (title) => {
  const response = await makeRequest.get(`/tutorials?title=${title}`);
  return response.data;
};

const create = async (form) => {
  const response = await makeRequest.post("/tutorials", form);
  return response.data;
};

const update = async (id, form) => {
  const response = await makeRequest.put(`/tutorials/${id}`, form);
  return response.data;
};

const deleteById = async (id) => {
  const response = await makeRequest.delete(`/tutorials/${id}`);
  return response.data;
};

const deleteAll = async () => {
  const response = await makeRequest.delete("/tutorials");
  return response.data;
};

const AuthService = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll,
};

export default AuthService;
