import { makeRequest } from "../helpers/axios";

const getAllRelation = async (userId) => {
  const response = await makeRequest.get(`user/getAllRelation/${userId}`);
  return response.data;
};

const getAllRelationByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `user/findAllRelationByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getAllRelationByName = async (name = null) => {
  const response = await makeRequest.get(
    `user/getAllRelationByName/?query=${name}`
  );
  return response.data;
};

const getAllRelationByCriteria = async (form) => {
  const response = await makeRequest.post(
    "user/getAllRelationByCriteria",
    form
  );
  return response.data;
};

const getRelation = async (relationId, relationType) => {
  const response = await makeRequest.get(
    `user/getRelation/${relationId}/${relationType}`
  );
  return response.data;
};

const getAllRelationByRelationType = async (relationType = null) => {
  const response = await makeRequest.get(
    `user/getAllRelationByRelationType/${relationType}`
  );
  return response.data;
};

const getAllRelationByCategory = async (category) => {
  const response = await makeRequest.get(
    `user/getAllRelationByCategory/${category}`
  );
  return response.data;
};

const getAllRelationByLevel = async (userId, level, relationType = null) => {
  const response = await makeRequest.get(
    `user/getAllRelationByCategory/${userId}/${level}/${relationType}`
  );
  return response.data;
};

const getAllRelationMemberByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `user/findAllRelationMemberByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const addRelation = async (form) => {
  const response = await makeRequest.post("user/addrelation", form);
  return response.data;
};

const addRelationMember = async (form) => {
  const response = await makeRequest.post("user/addusermember", form);
  return response.data;
};

const updateRelation = async (id, form) => {
  const response = await makeRequest.put(`user/updaterelation/${id}`, form);
  return response.data;
};

const deleteRelation = async (id) => {
  const response = await makeRequest.delete(`user/deleterelation/${id}`);
  return response.data;
};

const addChildOrSibling = async (form) => {
  const response = await makeRequest.user("user/addChildOrSibling", form);
  return response.data;
};

const getAllChildorSibling = async (relationType) => {
  const response = await makeRequest.get(
    `user/getAllChildorSibling/${relationType}`
  );
  return response.data;
};

const getChildOrSibling = async (relationId) => {
  const response = await makeRequest.get(
    `user/getChildOrSibling/${relationId}`
  );
  return response.data;
};

const deleteChildorSibling = async (id) => {
  const response = await makeRequest.delete(`user/deleteChildorSibling/${id}`);
  return response.data;
};
const addSchoolPlaceWork = async (form) => {
  const response = await makeRequest.post("user/addSchoolPlaceWork", form);
  return response.data;
};
const getAllSchoolPlaceWork = async (userId, relationType) => {
  const response = await makeRequest.get(
    `user/getAllSchoolPlaceWork/${userId}/${relationType}`
  );
  return response.data;
};

const getSchoolPlaceWork = async (Id, relationType) => {
  const response = await makeRequest.get(
    `user/getSchoolPlaceWork/${Id}/${relationType}`
  );
  return response.data;
};
const deleteSchoolPlaceWork = async (relationType, id) => {
  const response = await makeRequest.delete(
    `user/deleteSchoolPlaceWork/${relationType}/${id}`
  );
  return response.data;
};

const getNeighbourhoodByUserId = async (userId) => {
  const response = await makeRequest.get(
    `user/getNeighbourhoodByUserId/${userId}`
  );
  return response.data;
};

const RelationService = {
  getAllRelation,
  getAllRelationByDate,
  getAllRelationByName,
  getAllRelationByCriteria,
  getRelation,
  getAllRelationByRelationType,
  getAllRelationByCategory,
  getAllRelationByLevel,
  addRelation,
  addRelationMember,
  updateRelation,
  deleteRelation,
  addChildOrSibling,
  getAllChildorSibling,
  getChildOrSibling,
  deleteChildorSibling,
  addSchoolPlaceWork,
  getAllSchoolPlaceWork,
  getSchoolPlaceWork,
  deleteSchoolPlaceWork,
  getNeighbourhoodByUserId,
};

export default RelationService;
