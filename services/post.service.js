import { makeRequest } from "../helpers/axios";
import axiosInstance2 from "../helpers/axiosInstance-2";

const getAllPost = async (userId) => {
  const response = await axiosInstance2().get(`post/getallpost/${userId}`);

  return response.data;
};

const getAllPostComment = async (postId) => {
  const res = await axiosInstance2().get(
    `post/getallpostcomment?postId=${postId}`
  );
  // console.log("response", res.data);
  return res.data;
};

const getAllPostComment2 = (postId) => {
  makeRequest.get(`post/getallpostcomment?postId=${postId}`).then((res) => {
    console.log("response", res);
    return res.data;
  });
};

const getAllPostlike = async (postId) => {
  const response = await axiosInstance2().get(`post/getallpostlike/${postId}`);
  return response.data;
};

const getTimeline = async (userId) => {
  const response = await axiosInstance2().get(`post/timeline/${userId}`);
  return response.data;
};

const getPost = async (id) => {
  const response = await axiosInstance2().get(`post/getpost/${id}`);
  return response.data;
};

const getPostComment = async (id) => {
  const response = await axiosInstance2().get(`post/getpostcomment/${id}`);
  return response.data;
};

const addPost = async (form) => {
  try {
    const response = await axiosInstance2().post("post/addpost", form);
    return response.data;
  } catch (error) {}
};

const addPostComment = async (form) => {
  const response = await axiosInstance2().post("post/addpostcomment", form);

  return response.data;
};

const addPostLike = async (form) => {
  const response = await axiosInstance2().post("post/addpostlike", form);
  return response.data;
};

const updatePost = async (id, form) => {
  console.log("form", form);
  const response = await axiosInstance2().put(`post/updatepost`, form);
  return response.data;
};

const updatePostComment = async (id, form) => {
  const response = await axiosInstance2().put(
    `post/updatepostcomment/${id}`,
    form
  );
  return response.data;
};

const updatePostLike = async (id, form) => {
  const response = await axiosInstance2().put(
    `post/updatepostlike/${id}`,
    form
  );
  return response.data;
};

const deletePost = async (id) => {
  const response = await axiosInstance2().delete(`post/deletepost/${id}`);
  return response.data;
};

const deletePostComment = async (id) => {
  const response = await axiosInstance2().delete(
    `post/deletepostcomment/${id}`
  );
  return response.data;
};

const deletePostLike = async (id) => {
  const response = await axiosInstance2().delete(`post/deletepostlike/${id}`);
  return response.data;
};

const PostService = {
  getAllPost,
  getPost,
  getAllPostComment,
  getAllPostComment2,
  getAllPostlike,
  getTimeline,
  getPost,
  getPostComment,
  addPost,
  addPostComment,
  addPostLike,
  updatePost,
  updatePostComment,
  updatePostLike,
  deletePost,
  deletePostComment,
  deletePostLike,
};

export default PostService;
