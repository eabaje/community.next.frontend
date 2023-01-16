import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_REQUEST,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_FAIL,
  GET_LIKE_FAIL,
  GET_LIKE_SUCCESS,
  GET_LIKE_REQUEST,
  GET_LIKES_FAIL,
  GET_LIKES_SUCCESS,
  GET_LIKES_REQUEST,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_FAIL,
  GET_COMMENT_FAIL,
} from "../../constants/actionTypes";

const post = (state, { type, payload }) => {
  switch (type) {
    case EDIT_POST_REQUEST: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_POST_SUCCESS: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: false,
          error: null,
          data: payload,
        },
      };
    }

    case EDIT_POST_FAIL: {
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: false,
          error: payload,
        },
      };
    }

    case DELETE_POST_REQUEST: {
      return {
        ...state,
        deletePost: {
          ...state.deletePost,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        deletePost: {
          ...state.deletePost,
          loading: false,
          error: null,
        },

        Posts: {
          ...state.Posts,
          loading: false,
          data: state.Posts.data.filter((item) => item.PostId !== payload),
          error: null,
        },
      };
    }

    case CREATE_POST_FAIL:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: false,
          error: payload,
        },
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: true,
          error: null,
        },
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_POSTS_REQUEST:
      return {
        ...state,
        Posts: {
          ...state.Posts,
          loading: true,
          error: null,
        },
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        Posts: {
          ...state.Posts,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        Posts: {
          ...state.Posts,
          loading: false,
          error: payload,
        },
      };

    case GET_POST_REQUEST:
      return {
        ...state,
        Post: {
          ...state.Post,
          loading: true,
          error: null,
        },
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        Post: {
          ...state.Post,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_POST_FAIL:
      return {
        ...state,
        Post: {
          ...state.Post,
          loading: false,
          error: payload,
        },
      };

    case CREATE_LIKE_FAIL:
      return {
        ...state,
        createLike: {
          ...state.createLike,
          loading: false,
          error: null,
        },
      };
    case CREATE_LIKE_REQUEST:
      return {
        ...state,
        createLike: {
          ...state.createLike,
          loading: true,
          error: null,
        },
      };
    case CREATE_LIKE_SUCCESS:
      return {
        ...state,
        createLike: {
          ...state.createLike,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_LIKES_REQUEST:
      return {
        ...state,
        Likes: {
          ...state.Likes,
          loading: true,
          error: null,
        },
      };

    case GET_LIKES_SUCCESS:
      return {
        ...state,
        Likes: {
          ...state.Likes,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_LIKES_FAIL:
      return {
        ...state,
        Likes: {
          ...state.Likes,
          loading: false,
          error: payload,
        },
      };

    case GET_LIKE_REQUEST:
      return {
        ...state,
        Like: {
          ...state.Like,
          loading: true,
          error: null,
        },
      };

    case GET_LIKE_SUCCESS:
      return {
        ...state,
        Like: {
          ...state.Like,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_LIKE_FAIL:
      return {
        ...state,
        Like: {
          ...state.Like,
          loading: false,
          error: payload,
        },
      };
    case CREATE_COMMENT_FAIL:
      return {
        ...state,
        createComment: {
          ...state.createComment,
          loading: false,
          error: null,
        },
      };
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        createComment: {
          ...state.createComment,
          loading: true,
          error: null,
        },
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createComment: {
          ...state.createComment,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        Comments: {
          ...state.Comments,
          loading: true,
          error: null,
        },
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        Comments: {
          ...state.Comments,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_COMMENTS_FAIL:
      return {
        ...state,
        Comments: {
          ...state.Comments,
          loading: false,
          error: payload,
        },
      };

    case GET_COMMENT_REQUEST:
      return {
        ...state,
        Comment: {
          ...state.Comment,
          loading: true,
          error: null,
        },
      };

    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        Comment: {
          ...state.Comment,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_COMMENT_FAIL:
      return {
        ...state,
        Comment: {
          ...state.Comment,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default post;
