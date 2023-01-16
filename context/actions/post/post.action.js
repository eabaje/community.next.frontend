/* eslint-disable no-undef */
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_LIKE_REQUEST,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_FAIL,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_REQUEST,
  GET_COMMENT_FAIL,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import PostService from "../../../services/post.service";

export const getPosts = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POSTS_REQUEST,
    });

    const data = await PostService.getAllPost(userId);
    console.log("postResponse", data);

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_POSTS_FAIL, payload: message });
  }
};

export const getPostByPostId = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POST_REQUEST,
    });

    const { data } = await PostService.getPost(id);

    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_POST_FAIL, payload: message });
  }
};

export const AddPost = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_POST_REQUEST,
    });

    const data = await PostService.addPost(form);

    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_POST_FAIL, payload: message });
  }
};

export const EditPost = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_POST_REQUEST,
    });

    const data = await PostService.updatePost(id, form);

    dispatch({
      type: EDIT_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_POST_FAIL, payload: message });
  }
};

export const getComments = (id) => async (dispatch) => {
  console.log("id", id);

  try {
    dispatch({
      type: GET_COMMENTS_REQUEST,
    });

    const { data } = await PostService.getAllPostComment(id);
    console.log("data", data);
    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_COMMENTS_FAIL, payload: message });
  }
};

export const getComment = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENT_REQUEST,
    });

    const { data } = await PostService.getPostComment(id);

    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_COMMENT_FAIL, payload: message });
  }
};

export const AddPostComment = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_COMMENT_REQUEST,
    });

    const data = await PostService.addPostComment(form);
    console.log("data", data);
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_COMMENT_FAIL, payload: message });
  }
};

export const EditPostComment = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_COMMENT_REQUEST,
    });

    const data = await PostService.updatePostComment(id, form);

    dispatch({
      type: EDIT_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_COMMENT_FAIL, payload: message });
  }
};

export const AddPostLike = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_LIKE_REQUEST,
    });

    const data = await PostService.addPostLike(form);

    dispatch({
      type: CREATE_LIKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_LIKE_FAIL, payload: message });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  dispatch({ type: DELETE_POST_REQUEST });

  try {
    const { res } = await PostService.deletePost(postId);

    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_POST_FAIL, payload: message });
  }
};
