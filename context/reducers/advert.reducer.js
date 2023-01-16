import {
  CREATE_ADVERT_FAIL,
  CREATE_ADVERT_REQUEST,
  CREATE_ADVERT_SUCCESS,
  DELETE_ADVERT_REQUEST,
  DELETE_ADVERT_SUCCESS,
  GET_ADVERTS_FAIL,
  GET_ADVERTS_REQUEST,
  GET_ADVERTS_SUCCESS,
  EDIT_ADVERT_REQUEST,
  EDIT_ADVERT_SUCCESS,
  EDIT_ADVERT_FAIL,
  GET_ADVERT_REQUEST,
  GET_ADVERT_SUCCESS,
  GET_ADVERT_FAIL,
} from "../../constants/actionTypes";

const advert = (state, { type, payload }) => {
  switch (type) {
    case EDIT_ADVERT_REQUEST: {
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_ADVERT_SUCCESS: {
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: false,
          error: null,
        },
      };
    }

    case EDIT_ADVERT_FAIL: {
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_ADVERT_REQUEST: {
      return {
        ...state,
        deleteAdvert: {
          ...state.deleteAdvert,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_ADVERT_SUCCESS: {
      return {
        ...state,
        deleteAdvert: {
          ...state.deleteAdvert,
          loading: false,
          error: null,
        },

        Adverts: {
          ...state.Adverts,
          loading: false,
          data: state.Adverts.data.filter((item) => item.AdvertId !== payload),
          error: null,
        },
      };
    }

    case CREATE_ADVERT_FAIL:
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: false,
          error: null,
        },
      };
    case CREATE_ADVERT_REQUEST:
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: true,
          error: null,
        },
      };
    case CREATE_ADVERT_SUCCESS:
      return {
        ...state,
        createAdvert: {
          ...state.createAdvert,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_ADVERTS_REQUEST:
      return {
        ...state,
        Adverts: {
          ...state.Adverts,
          loading: true,
          error: null,
        },
      };

    case GET_ADVERTS_SUCCESS:
      return {
        ...state,
        Adverts: {
          ...state.Adverts,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_ADVERTS_FAIL:
      return {
        ...state,
        Adverts: {
          ...state.Adverts,
          loading: false,
          error: payload,
        },
      };

    case GET_ADVERT_REQUEST:
      return {
        ...state,
        Advert: {
          ...state.Advert,
          loading: true,
          error: null,
        },
      };

    case GET_ADVERT_SUCCESS:
      return {
        ...state,
        Advert: {
          ...state.Advert,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_ADVERT_FAIL:
      return {
        ...state,
        Advert: {
          ...state.Advert,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default advert;
