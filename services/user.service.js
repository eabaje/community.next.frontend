import { makeRequest } from "../helpers/axios";

const getAllUser = async () => {
  const response = await makeRequest.get("user/findAllUser");
  return response.data;
};

const getUser = async (id) => {
  const response = await makeRequest.get(`user/findUser/${id}`);
  return response.data;
};
const getUserByName = async (name) => {
  const response = await makeRequest.get(`user/findAllUserBySearch/${name}`);
  return response.data;
};

const getAllUserByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `user/findAllUserByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getUserRoles = async (userId) => {
  const response = await makeRequest.get(`user/findUserRoles/${userId}`);
  return response.data;
};

const getRoles = async (id) => {
  const response = await makeRequest.get(`user/findRoles`);
  return response.data;
};

const addUser = async (form) => {
  const response = await makeRequest.post("user/adduser", form);
  return response.data;
};

const updateRole = async (id, form) => {
  const response = await makeRequest.put(`user/updateUser/${id}`, form);
  return response.data;
};
const updateUserRole = async (id, form) => {
  const response = await makeRequest.put(`user/updateUserRole/${id}`, form);
  return response.data;
};
const updateUser = async (id, form) => {
  const response = await makeRequest.put(`user/updateUser/${id}`, form);
  return response.data;
};

const updateFile = async (id, form) => {
  const response = await makeRequest.put(`user/updateFile/${id}`, form);
  return response.data;
};

const uploadCompanyDoc = async (id, form) => {
  const response = await makeRequest.put(`user/uploadCompanyDoc/${id}`, form);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await makeRequest.delete(`user/deleteuser/${id}`);
  return response.data;
};

const deleteRole = async (id) => {
  const response = await makeRequest.delete(`user/deleteRole/${id}`);
  return response.data;
};

const deleteAll = async (id) => {
  const response = await makeRequest.delete(`user/deleteall`);
  return response.data;
};

const UserService = {
  getAllUser,
  getAllUserByDate,
  getUser,
  getUserByName,
  getUserRoles,
  getRoles,
  addUser,
  updateUser,
  updateRole,
  updateUserRole,
  updateFile,
  deleteUser,
  deleteRole,
  deleteAll,
};

export default UserService;
