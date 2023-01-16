import {
  CREATE_RELATIONSHIP_FAIL,
  CREATE_RELATIONSHIP_REQUEST,
  CREATE_RELATIONSHIP_SUCCESS,
  DELETE_RELATIONSHIP_REQUEST,
  DELETE_RELATIONSHIP_SUCCESS,
  GET_RELATIONSHIPS_FAIL,
  GET_RELATIONSHIPS_REQUEST,
  GET_RELATIONSHIPS_SUCCESS,
  EDIT_RELATIONSHIP_REQUEST,
  EDIT_RELATIONSHIP_SUCCESS,
  EDIT_RELATIONSHIP_FAIL,
} from "../../constants/actionTypes";

const relationship = (state, { type, payload }) => {
  switch (type) {
    case EDIT_RELATIONSHIP_REQUEST: {
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_RELATIONSHIP_SUCCESS: {
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: false,
          error: null,
        },

        Relationships: {
          ...state.Relationships,
          loading: false,
          data: state.Relationships.data.map((item) => {
            if (item.RelationshipId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_RELATIONSHIP_FAIL: {
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_RELATIONSHIP_REQUEST: {
      return {
        ...state,
        deleteRelationship: {
          ...state.deleteRelationship,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_RELATIONSHIP_SUCCESS: {
      return {
        ...state,
        deleteRelationship: {
          ...state.deleteRelationship,
          loading: false,
          error: null,
        },

        Relationships: {
          ...state.Relationships,
          loading: false,
          data: state.Relationships.data.filter(
            (item) => item.RelationshipId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_RELATIONSHIP_FAIL:
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: false,
          error: null,
        },
      };
    case CREATE_RELATIONSHIP_REQUEST:
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: true,
          error: null,
        },
      };
    case CREATE_RELATIONSHIP_SUCCESS:
      return {
        ...state,
        createRelationship: {
          ...state.createRelationship,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_RELATIONSHIPS_REQUEST:
      return {
        ...state,
        Relationships: {
          ...state.Relationships,
          loading: true,
          error: null,
        },
      };

    case GET_RELATIONSHIPS_SUCCESS:
      return {
        ...state,
        Relationships: {
          ...state.Relationships,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_RELATIONSHIPS_FAIL:
      return {
        ...state,
        Relationships: {
          ...state.Relationships,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default relationship;
