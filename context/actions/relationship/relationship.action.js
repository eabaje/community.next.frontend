import {
  CREATE_RELATIONSHIP_FAIL,
  CREATE_RELATIONSHIP_REQUEST,
  CREATE_RELATIONSHIP_SUCCESS,
  GET_RELATIONSHIPS_FAIL,
  GET_RELATIONSHIPS_REQUEST,
  GET_RELATIONSHIPS_SUCCESS,
  EDIT_RELATIONSHIP_FAIL,
  EDIT_RELATIONSHIP_REQUEST,
  EDIT_RELATIONSHIP_SUCCESS,
  DELETE_RELATIONSHIP_FAIL,
  DELETE_RELATIONSHIP_REQUEST,
  DELETE_RELATIONSHIP_SUCCESS,
  GET_RELATIONSHIP_REQUEST,
  GET_RELATIONSHIP_SUCCESS,
  GET_RELATIONSHIP_FAIL,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import RelationshipService from "../../../services/relationship.service";

export const getRelationships = (userId, type) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONSHIPS_REQUEST,
    });

    const { data } = await RelationshipService.getAllRelationship(userId, type);

    dispatch({
      type: GET_RELATIONSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONSHIP_FAIL, payload: message });
  }
};

export const getRelationship = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONSHIP_REQUEST,
    });

    const { data } = await RelationshipService.getRelationship(id);

    dispatch({
      type: GET_RELATIONSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONSHIP_FAIL, payload: message });
  }
};

export const addRelationship = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_RELATIONSHIP_REQUEST,
    });

    const { data } = await RelationshipService.addRelationship(form);

    dispatch({
      type: CREATE_RELATIONSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_RELATIONSHIP_FAIL, payload: message });
  }
};

export const updateRelationship = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_RELATIONSHIP_REQUEST,
    });

    const { data } = await RelationshipService.updateRelationship(id, form);

    dispatch({
      type: EDIT_RELATIONSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_RELATIONSHIP_FAIL, payload: message });
  }
};

export const deleteRelationship = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_RELATIONSHIP_REQUEST,
    });

    const { data } = await RelationshipService.deleteRelationship(id);

    dispatch({
      type: DELETE_RELATIONSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: DELETE_RELATIONSHIP_FAIL, payload: message });
  }
};
