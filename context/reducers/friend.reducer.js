import {
  CREATE_FRIEND_FAIL,
  CREATE_FRIEND_REQUEST,
  CREATE_FRIEND_SUCCESS,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_SUCCESS,
  GET_FRIENDS_FAIL,
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
  EDIT_FRIEND_REQUEST,
  EDIT_FRIEND_SUCCESS,
  EDIT_FRIEND_FAIL,
  GET_FRIEND_REQUEST,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAIL,
} from "../../constants/actionTypes";

const friends = (state, { type, payload }) => {
  switch (type) {
    case EDIT_FRIEND_REQUEST: {
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_FRIEND_SUCCESS: {
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: false,
          error: null,
        },
      };
    }

    case EDIT_FRIEND_FAIL: {
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_FRIEND_REQUEST: {
      return {
        ...state,
        deleteFriend: {
          ...state.deleteFriend,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_FRIEND_SUCCESS: {
      return {
        ...state,
        deleteFriend: {
          ...state.deleteFriend,
          loading: false,
          error: null,
        },

        Friends: {
          ...state.Friends,
          loading: false,
          data: state.Friends.data.filter((item) => item.FriendId !== payload),
          error: null,
        },
      };
    }

    case CREATE_FRIEND_FAIL:
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: false,
          error: null,
        },
      };
    case CREATE_FRIEND_REQUEST:
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: true,
          error: null,
        },
      };
    case CREATE_FRIEND_SUCCESS:
      return {
        ...state,
        createFriend: {
          ...state.createFriend,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_FRIENDS_REQUEST:
      return {
        ...state,
        Friends: {
          ...state.Friends,
          loading: true,
          error: null,
        },
      };

    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        Friends: {
          ...state.Friends,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_FRIENDS_FAIL:
      return {
        ...state,
        Friends: {
          ...state.Friends,
          loading: false,
          error: payload,
        },
      };

    case GET_FRIEND_REQUEST:
      return {
        ...state,
        Friend: {
          ...state.Friend,
          loading: true,
          error: null,
        },
      };

    case GET_FRIEND_SUCCESS:
      return {
        ...state,
        Friend: {
          ...state.Friend,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_FRIEND_FAIL:
      return {
        ...state,
        Friend: {
          ...state.Friend,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default friends;
