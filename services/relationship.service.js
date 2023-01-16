import { makeRequest } from "../helpers/axios";

const getAllRelationship = async (userId, type = null) => {
  const response = await makeRequest.get(
    `relationship/getallrelationship/${userId}/${type}`
  );
  return response.data;
};

const getRelationship = async (id) => {
  const response = await makeRequest.get(`relationship/getrelationship/${id}`);
  return response.data;
};

const addRelationship = async (form) => {
  const response = await makeRequest.post("relationship/addrelationship", form);
  return response.data;
};

const updateRelationship = async (id, form) => {
  const response = await makeRequest.put(
    `relationship/updaterelationship/${id}`,
    form
  );
  return response.data;
};

const deleteRelationship = async (id) => {
  const response = await makeRequest.delete(
    `relationship/deleterelationship/${id}`
  );
  return response.data;
};

const RelationshipService = {
  getAllRelationship,
  getRelationship,
  getRelationship,
  addRelationship,
  updateRelationship,
  deleteRelationship,
};

export default RelationshipService;
