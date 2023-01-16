import { makeRequest } from "../helpers/axios";

const getAllPayment = async () => {
  const response = await makeRequest.get("payment/getallpayment");
  return response.data;
};

const getAllPaymentByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `payment/findAllPaymentByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getPayment = async (id) => {
  const response = await makeRequest.get(`payment/findOne/${id}`);
  return response.data;
};

const addPayment = async (form) => {
  const response = await makeRequest.post("payment/create", form);
  return response.data;
};

const searchPayment = async (form) => {
  const response = await makeRequest.post("payment/searchPayment", form);
  return response.data;
};

const updatePayment = async (id, form) => {
  const response = await makeRequest.put(`payment/update/${id}`, form);
  return response.data;
};

const deletePayment = async (id) => {
  const response = await makeRequest.delete(`payment/delete/${id}`);
  return response.data;
};

const PaymentService = {
  getAllPayment,
  getAllPaymentByDate,
  getPayment,
  addPayment,
  searchPayment,
  updatePayment,
  deletePayment,
};

export default PaymentService;
