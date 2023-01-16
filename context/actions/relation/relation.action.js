import {
  CREATE_RELATION_FAIL,
  CREATE_RELATION_REQUEST,
  CREATE_RELATION_SUCCESS,
  GET_RELATIONS_FAIL,
  GET_RELATIONS_REQUEST,
  GET_RELATIONS_SUCCESS,
  EDIT_RELATION_FAIL,
  EDIT_RELATION_REQUEST,
  EDIT_RELATION_SUCCESS,
  DELETE_RELATION_FAIL,
  DELETE_RELATION_REQUEST,
  DELETE_RELATION_SUCCESS,
  GET_RELATION_REQUEST,
  GET_RELATION_SUCCESS,
  GET_RELATION_FAIL,
  GET_SCHOOLS_REQUEST,
  GET_WORKS_REQUEST,
  GET_PLACES_REQUEST,
  GET_SCHOOLS_SUCCESS,
  GET_WORKS_SUCCESS,
  GET_SCHOOLS_FAIL,
  GET_WORKS_FAIL,
  GET_PLACES_FAIL,
  GET_SCHOOL_REQUEST,
  GET_WORK_REQUEST,
  GET_PLACE_REQUEST,
  GET_SCHOOL_SUCCESS,
  GET_WORK_SUCCESS,
  GET_PLACE_SUCCESS,
  GET_PLACES_SUCCESS,
  GET_SCHOOL_FAIL,
  GET_WORK_FAIL,
  GET_PLACE_FAIL,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import RelationService from "../../../services/relation.service";

export const getRelations = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONS_REQUEST,
    });

    const { data } = await RelationService.getAllRelation(userId);

    dispatch({
      type: GET_RELATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONS_FAIL, payload: message });
  }
};

export const getRelation = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATION_REQUEST,
    });

    const { data } = await RelationService.getAllRelation(userId);

    dispatch({
      type: GET_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATION_FAIL, payload: message });
  }
};

export const getRelationsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONS_REQUEST,
    });

    const { data } = await RelationService.getAllRelationByCategory(category);

    dispatch({
      type: GET_RELATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONS_FAIL, payload: message });
  }
};

export const getRelationsByLevel =
  (userId, level, relationType = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_RELATIONS_REQUEST,
      });

      const { data } = await RelationService.getAllRelationByLevel(
        userId,
        level,
        relationType
      );

      dispatch({
        type: GET_RELATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_RELATIONS_FAIL, payload: message });
    }
  };

export const getRelationsByDate = (fromDate, toDate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONS_REQUEST,
    });

    const { data } = await RelationService.getAllRelationByDate(
      fromDate,
      toDate
    );

    dispatch({
      type: GET_RELATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONS_FAIL, payload: message });
  }
};

export const getAllRelationByCriteria = (form) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONS_REQUEST,
    });

    const { data } = await RelationService.getAllRelationByCriteria(form);

    dispatch({
      type: GET_RELATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONS_FAIL, payload: message });
  }
};

export const getRelationsByRelationType =
  (relationType) => async (dispatch) => {
    try {
      dispatch({
        type: GET_RELATIONS_REQUEST,
      });

      const { data } = await RelationService.getAllRelationByRelationType(
        relationType
      );

      dispatch({
        type: GET_RELATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_RELATIONS_FAIL, payload: message });
    }
  };

export const addRelation = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_RELATION_REQUEST,
    });

    const { data } = await RelationService.addRelation(form);

    dispatch({
      type: CREATE_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_RELATION_FAIL, payload: message });
  }
};

export const deleteRelation = (relationId) => async (dispatch) => {
  dispatch({ type: DELETE_RELATION_REQUEST });

  try {
    const { data } = await RelationService.deleteRelation(relationId);

    dispatch({
      type: DELETE_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_RELATION_FAIL, payload: message });
  }
};

export const getAllChildorSibling = (relationType) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATIONS_REQUEST,
    });

    const { data } = await RelationService.getAllChildorSibling(relationType);

    dispatch({
      type: GET_RELATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATIONS_FAIL, payload: message });
  }
};

export const getChildorSibling = (relationId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATION_REQUEST,
    });

    const { data } = await RelationService.getChildOrSibling(relationId);

    dispatch({
      type: GET_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_RELATION_FAIL, payload: message });
  }
};

export const AddChildorSibling = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_RELATION_REQUEST,
    });

    const { data } = await RelationService.addChildOrSibling(form);

    dispatch({
      type: CREATE_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_RELATION_FAIL, payload: message });
  }
};

export const deleteChildorSibling = (relationId) => async (dispatch) => {
  dispatch({ type: DELETE_RELATION_REQUEST });

  try {
    const { data } = await RelationService.deleteChildorSibling(relationId);

    dispatch({
      type: DELETE_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_RELATION_FAIL, payload: message });
  }
};

export const addSchoolPlaceWork = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_RELATION_REQUEST,
    });

    const { data } = await RelationService.addSchoolPlaceWork(form);

    dispatch({
      type: CREATE_RELATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_RELATION_FAIL, payload: message });
  }
};

export const getAllSchoolPlaceWork =
  (userId, relationType) => async (dispatch) => {
    try {
      relationType === "school"
        ? dispatch({
            type: GET_SCHOOLS_REQUEST,
          })
        : relationType === "work"
        ? dispatch({
            type: GET_WORKS_REQUEST,
          })
        : dispatch({
            type: GET_PLACES_REQUEST,
          });
      const { data } = await RelationService.getAllSchoolPlaceWork(
        userId,
        relationType
      );

      relationType === "school"
        ? dispatch({
            type: GET_SCHOOLS_SUCCESS,
            payload: data,
          })
        : relationType === "work"
        ? dispatch({
            type: GET_WORKS_SUCCESS,
            payload: data,
          })
        : dispatch({
            type: GET_PLACES_SUCCESS,
            payload: data,
          });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;

      relationType === "school"
        ? dispatch({
            type: GET_SCHOOLS_FAIL,
            payload: message,
          })
        : relationType === "work"
        ? dispatch({
            type: GET_WORKS_FAIL,
            payload: message,
          })
        : dispatch({
            type: GET_PLACES_FAIL,
            payload: message,
          });
    }
  };

export const getSchoolPlaceWork = (Id, relationType) => async (dispatch) => {
  try {
    relationType === "school"
      ? dispatch({
          type: GET_SCHOOL_REQUEST,
        })
      : relationType === "work"
      ? dispatch({
          type: GET_WORK_REQUEST,
        })
      : dispatch({
          type: GET_PLACE_REQUEST,
        });
    const { data } = await RelationService.getSchoolPlaceWork(Id, relationType);

    relationType === "school"
      ? dispatch({
          type: GET_SCHOOL_SUCCESS,
          payload: data,
        })
      : relationType === "work"
      ? dispatch({
          type: GET_WORK_SUCCESS,
          payload: data,
        })
      : dispatch({
          type: GET_PLACE_SUCCESS,
          payload: data,
        });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    relationType === "school"
      ? dispatch({
          type: GET_SCHOOL_FAIL,
          payload: message,
        })
      : relationType === "work"
      ? dispatch({
          type: GET_WORK_FAIL,
          payload: message,
        })
      : dispatch({
          type: GET_PLACE_FAIL,
          payload: message,
        });
  }
};
