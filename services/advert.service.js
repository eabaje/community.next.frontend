import { makeRequest } from "../helpers/axios";

const getAllAdvert = async () => {
  const response = await makeRequest.get("advert/getalladvert");
  return response.data;
};

const getAllAdvertByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `advert/findAllAdvertByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getAdvert = async (id) => {
  const response = await makeRequest.get(`advert/getadvert/${id}`);
  return response.data;
};

const addAdvert = async (form) => {
  const response = await makeRequest.post("advert/addadvert", form);
  return response.data;
};

const searchAdvert = async (form) => {
  const response = await makeRequest.post("advert/searchAdvert", form);
  return response.data;
};

const updateAdvert = async (id, form) => {
  const response = await makeRequest.put(`advert/updateadvert/${id}`, form);
  return response.data;
};

const deleteAdvert = async (id) => {
  const response = await makeRequest.delete(`advert/deleteadvert/${id}`);
  return response.data;
};

const AdvertService = {
  getAllAdvert,
  getAllAdvertByDate,
  getAdvert,
  addAdvert,
  searchAdvert,
  updateAdvert,
  deleteAdvert,
};

export default AdvertService;
