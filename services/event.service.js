import { makeRequest } from "../helpers/axios";

const getAllEvent = async (userId) => {
  const response = await makeRequest.get(`event/getallevent/${userId}`);
  return response.data;
};

const getAllEventSent = async (targetId) => {
  const response = await makeRequest.get(`event/getAllEventSent/${targetId}`);
  return response.data;
};

const getAllNotificationSent = async (targetId) => {
  const response = await makeRequest.get(
    `event/getAllNotificationSent/${targetId}`
  );
  return response.data;
};

const getAllEventByDate = async (fromDate, toDate) => {
  const response = await makeRequest.get(
    `event/getAllEventByDate/${fromDate}/${toDate}`
  );
  return response.data;
};

const getEvent = async (id) => {
  const response = await makeRequest.get(`event/getevent/${id}`);
  return response.data;
};

const addEvent = async (form) => {
  const response = await makeRequest.post("event/addEvent", form);
  return response.data;
};

const updateEvent = async (id, form) => {
  const response = await makeRequest.put(`event/updateEvent/${id}`, form);
  return response.data;
};

const deleteEvent = async (id) => {
  const response = await makeRequest.delete(`event/deleteEvent/${id}`);
  return response.data;
};

const EventService = {
  getAllEvent,
  getAllEventByDate,
  getEvent,
  getAllEventSent,
  getAllNotificationSent,
  addEvent,
  updateEvent,
  deleteEvent,
};

export default EventService;

app.get("/api/event/getAllEvent/:userId?", controller.getAllEvent);
app.get("/api/event/getAllEventSent/:targetId", controller.getAllEventSent);
app.get(
  "/api/event/getAllNotificationSent/:targetId?",
  controller.getAllEventSent
);
app.get("/api/event/getEvent/:UserEventId", controller.getEvent);
