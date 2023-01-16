import {
  CREATE_GROUP_FAIL,
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  GET_GROUPS_FAIL,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  EDIT_GROUP_REQUEST,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_FAIL,
  GET_GROUP_REQUEST,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAIL,
} from "../../constants/actionTypes";

const GROUP = (state, { type, payload }) => {
  switch (type) {
    case EDIT_GROUP_REQUEST: {
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_GROUP_SUCCESS: {
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          error: null,
        },
      };
    }

    case EDIT_GROUP_FAIL: {
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_GROUP_REQUEST: {
      return {
        ...state,
        deleteGroup: {
          ...state.deleteGROUP,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_GROUP_SUCCESS: {
      return {
        ...state,
        deleteGroup: {
          ...state.deleteGROUP,
          loading: false,
          error: null,
        },

        Groups: {
          ...state.Groups,
          loading: false,
          data: state.Groups.data.filter((item) => item.GroupId !== payload),
          error: null,
        },
      };
    }

    case CREATE_GROUP_FAIL:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          error: null,
        },
      };
    case CREATE_GROUP_REQUEST:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: true,
          error: null,
        },
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_GROUPS_REQUEST:
      return {
        ...state,
        Groups: {
          ...state.Groups,
          loading: true,
          error: null,
        },
      };

    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        Groups: {
          ...state.Groups,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_GROUPS_FAIL:
      return {
        ...state,
        Groups: {
          ...state.Groups,
          loading: false,
          error: payload,
        },
      };

    case GET_GROUP_REQUEST:
      return {
        ...state,
        Group: {
          ...state.Group,
          loading: true,
          error: null,
        },
      };

    case GET_GROUP_SUCCESS:
      return {
        ...state,
        Group: {
          ...state.Group,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_GROUP_FAIL:
      return {
        ...state,
        Group: {
          ...state.Group,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default GROUP;
