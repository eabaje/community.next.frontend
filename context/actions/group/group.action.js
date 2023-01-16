import {
  CREATE_GROUP_FAIL,
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  GET_GROUPS_FAIL,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  EDIT_GROUP_FAIL,
  EDIT_GROUP_REQUEST,
  EDIT_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import GroupService from "../../../services/group.service";

export const getGroups = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_GROUPS_REQUEST,
    });

    const { data } = await GroupService.getAllGroup();

    dispatch({
      type: GET_GROUPS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_GROUPS_FAIL, payload: message });
  }
};

export const getGroup = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_GROUP_REQUEST,
    });

    const { data } = await GroupService.getGroup(id);

    dispatch({
      type: GET_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_GROUP_FAIL, payload: message });
  }
};

export const addGroup = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_GROUP_REQUEST,
    });

    const { data } = await GroupService.addGroup(form);

    dispatch({
      type: CREATE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_GROUP_FAIL, payload: message });
  }
};

export const updateGroup = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_GROUP_REQUEST,
    });

    const { data } = await GroupService.updateGroup(id, form);

    dispatch({
      type: EDIT_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_GROUP_FAIL, payload: message });
  }
};

export const deleteGroup = (groupId) => async (dispatch) => {
  dispatch({ type: DELETE_GROUP_REQUEST });

  try {
    const { res } = await axios.delete(`/group/delete/${groupId}`);

    dispatch({
      type: DELETE_GROUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_GROUP_FAIL, payload: message });
  }
};
