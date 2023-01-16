import { makeRequest } from "../helpers/axios";

const getAllOrder = async () => {
  const response = await makeRequest.get("order/getallorder");
  return response.data;
};

const getAllOrderByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `order/findAllOrderByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getOrder = async (id) => {
  const response = await makeRequest.get(`order/findOne/${id}`);
  return response.data;
};

const addOrder = async (form) => {
  const response = await makeRequest.post("order/create", form);
  return response.data;
};

const searchOrder = async (form) => {
  const response = await makeRequest.post("order/searchOrder", form);
  return response.data;
};

const updateOrder = async (id, form) => {
  const response = await makeRequest.put(`order/update/${id}`, form);
  return response.data;
};

const deleteOrder = async (id) => {
  const response = await makeRequest.delete(`order/delete/${id}`);
  return response.data;
};

const OrderService = {
  getAllOrder,
  getAllOrderByDate,
  getOrder,
  addOrder,
  searchOrder,
  updateOrder,
  deleteOrder,
};

export default OrderService;
