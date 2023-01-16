import {
  CREATE_RELATION_FAIL,
  CREATE_RELATION_REQUEST,
  CREATE_RELATION_SUCCESS,
  DELETE_RELATION_REQUEST,
  DELETE_RELATION_SUCCESS,
  GET_RELATIONS_FAIL,
  GET_RELATIONS_REQUEST,
  GET_RELATIONS_SUCCESS,
  EDIT_RELATION_REQUEST,
  EDIT_RELATION_SUCCESS,
  EDIT_RELATION_FAIL,
  GET_RELATION_SUCCESS,
  GET_RELATION_REQUEST,
  GET_RELATION_FAIL,
  GET_WORKS_REQUEST,
  GET_WORKS_SUCCESS,
  GET_WORKS_FAIL,
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAIL,
  GET_SCHOOL_REQUEST,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL_FAIL,
  GET_SCHOOLS_REQUEST,
  GET_SCHOOLS_SUCCESS,
  GET_SCHOOLS_FAIL,
  GET_PLACES_REQUEST,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAIL,
  GET_PLACE_REQUEST,
  GET_PLACE_SUCCESS,
  GET_PLACE_FAIL,
} from "../../constants/actionTypes";

const relation = (state, { type, payload }) => {
  switch (type) {
    case EDIT_RELATION_REQUEST: {
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_RELATION_SUCCESS: {
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: false,
          error: null,
          data: payload,
        },

        Relations: {
          ...state.Relations,
          loading: false,
          data: state.Relations.data.map((item) => {
            if (item.RelationId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_RELATION_FAIL: {
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_RELATION_REQUEST: {
      return {
        ...state,
        deleteRelation: {
          ...state.deleteRelation,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_RELATION_SUCCESS: {
      return {
        ...state,
        deleteRelation: {
          ...state.deleteRelation,
          loading: false,
          error: null,
        },

        Relations: {
          ...state.Relations,
          loading: false,
          data: state.Relations.data.filter(
            (item) => item.RelationId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_RELATION_FAIL:
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: false,
          error: null,
        },
      };
    case CREATE_RELATION_REQUEST:
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: true,
          error: null,
        },
      };
    case CREATE_RELATION_SUCCESS:
      return {
        ...state,
        createRelation: {
          ...state.createRelation,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_RELATIONS_REQUEST:
      return {
        ...state,
        Relations: {
          ...state.Relations,
          loading: true,
          error: null,
        },
      };

    case GET_RELATIONS_SUCCESS:
      return {
        ...state,
        Relations: {
          ...state.Relations,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_RELATIONS_FAIL:
      return {
        ...state,
        Relations: {
          ...state.Relations,
          loading: false,
          error: payload,
        },
      };
    case GET_RELATION_REQUEST:
      return {
        ...state,
        Relation: {
          ...state.Relation,
          loading: true,
          error: null,
        },
      };

    case GET_RELATION_SUCCESS:
      return {
        ...state,
        Relation: {
          ...state.Relation,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_RELATION_FAIL:
      return {
        ...state,
        Relation: {
          ...state.Relation,
          loading: false,
          error: payload,
        },
      };

    case GET_WORKS_REQUEST:
      return {
        ...state,
        Works: {
          ...state.Works,
          loading: true,
          error: null,
        },
      };

    case GET_WORKS_SUCCESS:
      return {
        ...state,
        Works: {
          ...state.Works,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_WORKS_FAIL:
      return {
        ...state,
        Works: {
          ...state.Works,
          loading: false,
          error: payload,
        },
      };
    case GET_WORK_REQUEST:
      return {
        ...state,
        Work: {
          ...state.Work,
          loading: true,
          error: null,
        },
      };

    case GET_WORK_SUCCESS:
      return {
        ...state,
        Work: {
          ...state.Work,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_WORK_FAIL:
      return {
        ...state,
        Work: {
          ...state.Work,
          loading: false,
          error: payload,
        },
      };

    case GET_SCHOOL_REQUEST:
      return {
        ...state,
        School: {
          ...state.School,
          loading: true,
          error: null,
        },
      };

    case GET_SCHOOL_SUCCESS:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_SCHOOL_FAIL:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          error: payload,
        },
      };
    case GET_WORK_REQUEST:
      return {
        ...state,
        School: {
          ...state.School,
          loading: true,
          error: null,
        },
      };

    case GET_WORK_SUCCESS:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_WORK_FAIL:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          error: payload,
        },
      };

    case GET_SCHOOLS_REQUEST:
      return {
        ...state,
        Schools: {
          ...state.Schools,
          loading: true,
          error: null,
        },
      };

    case GET_SCHOOLS_SUCCESS:
      return {
        ...state,
        Schools: {
          ...state.Schools,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_SCHOOLS_FAIL:
      return {
        ...state,
        Schools: {
          ...state.Schools,
          loading: false,
          error: payload,
        },
      };
    case GET_SCHOOL_REQUEST:
      return {
        ...state,
        School: {
          ...state.School,
          loading: true,
          error: null,
        },
      };

    case GET_SCHOOL_SUCCESS:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_SCHOOL_FAIL:
      return {
        ...state,
        School: {
          ...state.School,
          loading: false,
          error: payload,
        },
      };

    case GET_PLACES_REQUEST:
      return {
        ...state,
        Places: {
          ...state.Places,
          loading: true,
          error: null,
        },
      };

    case GET_PLACES_SUCCESS:
      return {
        ...state,
        Places: {
          ...state.Places,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_PLACES_FAIL:
      return {
        ...state,
        Places: {
          ...state.Places,
          loading: false,
          error: payload,
        },
      };
    case GET_PLACE_REQUEST:
      return {
        ...state,
        Place: {
          ...state.Place,
          loading: true,
          error: null,
        },
      };

    case GET_PLACE_SUCCESS:
      return {
        ...state,
        Place: {
          ...state.Place,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_PLACE_FAIL:
      return {
        ...state,
        Place: {
          ...state.Place,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default relation;
