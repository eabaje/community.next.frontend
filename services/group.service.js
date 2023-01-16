import { makeRequest } from "../helpers/axios";

const getAllGroup = async () => {
  const response = await makeRequest.get("group/getallgroup");
  return response.data;
};

const getAllGroupByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `group/findAllGroupByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getGroup = async (id) => {
  const response = await makeRequest.get(`group/getgroup/${id}`);
  return response.data;
};

const getAllGroupMember = async () => {
  const response = await makeRequest.get("group/getallgroupmember");
  return response.data;
};

const getGroupMember = async (id) => {
  const response = await makeRequest.get(`group/getgroupmember/${id}`);
  return response.data;
};

const getAllGroupMemberByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `group/findAllGroupMemberByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const addGroup = async (form) => {
  const response = await makeRequest.post("group/addgroup", form);
  return response.data;
};

const addGroupMember = async (form) => {
  const response = await makeRequest.post("group/addgroupmember", form);
  return response.data;
};

const updateGroup = async (id, form) => {
  const response = await makeRequest.put(`group/updategroup/${id}`, form);
  return response.data;
};

const deleteGroup = async (id) => {
  const response = await makeRequest.delete(`group/deletegroup/${id}`);
  return response.data;
};

const deleteGroupMember = async (id) => {
  const response = await makeRequest.delete(`group/deletegroupmember/${id}`);
  return response.data;
};

const GroupService = {
  getAllGroup,
  getAllGroupByDate,
  getGroup,
  getAllGroupMember,
  getGroupMember,
  getAllGroupMemberByDate,
  addGroup,
  addGroupMember,
  updateGroup,
  deleteGroup,
  deleteGroupMember,
};

export default GroupService;
