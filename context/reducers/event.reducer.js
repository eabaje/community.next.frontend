import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  GET_EVENTS_FAIL,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  EDIT_EVENT_REQUEST,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAIL,
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
} from "../../constants/actionTypes";

const EVENT = (state, { type, payload }) => {
  switch (type) {
    case EDIT_EVENT_REQUEST: {
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_EVENT_SUCCESS: {
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: false,
          error: null,
        },
      };
    }

    case EDIT_EVENT_FAIL: {
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_EVENT_REQUEST: {
      return {
        ...state,
        deleteEvent: {
          ...state.deleteEVENT,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_EVENT_SUCCESS: {
      return {
        ...state,
        deleteEvent: {
          ...state.deleteEVENT,
          loading: false,
          error: null,
        },

        Events: {
          ...state.Events,
          loading: false,
          data: state.Events.data.filter((item) => item.EventId !== payload),
          error: null,
        },
      };
    }

    case CREATE_EVENT_FAIL:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: false,
          error: null,
        },
      };
    case CREATE_EVENT_REQUEST:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: true,
          error: null,
        },
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_EVENTS_REQUEST:
      return {
        ...state,
        Events: {
          ...state.Events,
          loading: true,
          error: null,
        },
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        Events: {
          ...state.Events,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_EVENTS_FAIL:
      return {
        ...state,
        Events: {
          ...state.Events,
          loading: false,
          error: payload,
        },
      };

    case GET_EVENT_REQUEST:
      return {
        ...state,
        Event: {
          ...state.Event,
          loading: true,
          error: null,
        },
      };

    case GET_EVENT_SUCCESS:
      return {
        ...state,
        Event: {
          ...state.Event,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_EVENT_FAIL:
      return {
        ...state,
        Event: {
          ...state.Event,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default EVENT;
