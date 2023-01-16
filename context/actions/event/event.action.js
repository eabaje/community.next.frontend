import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  GET_EVENTS_FAIL,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  EDIT_EVENT_FAIL,
  EDIT_EVENT_REQUEST,
  EDIT_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import EventService from "../../../services/event.service";

export const getEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_EVENTS_REQUEST,
    });

    const { data } = await EventService.getAllEvent();

    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_EVENTS_FAIL, payload: message });
  }
};

export const getEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_EVENT_REQUEST,
    });

    const { data } = await EventService.getEvent(id);

    dispatch({
      type: GET_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_EVENT_FAIL, payload: message });
  }
};

export const getAllNotificationSent = (targetId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_EVENTS_REQUEST,
    });

    const { data } = await EventService.getAllNotificationSent(targetId);

    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_EVENTS_FAIL, payload: message });
  }
};

export const addEvent = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_EVENT_REQUEST,
    });

    const { data } = await EventService.addEvent(form);

    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_EVENT_FAIL, payload: message });
  }
};

export const updateEvent = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_EVENT_REQUEST,
    });

    const { data } = await EventService.updateEvent(id, form);

    dispatch({
      type: EDIT_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_EVENT_FAIL, payload: message });
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  dispatch({ type: DELETE_EVENT_REQUEST });

  try {
    const { res } = await axios.delete(`/event/delete/${eventId}`);

    dispatch({
      type: DELETE_EVENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_EVENT_FAIL, payload: message });
  }
};
