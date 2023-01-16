//import "../../styles/share.module.css";
import { MoreVert } from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { GlobalContext } from "../../context/Provider";
import {
  AddPost,
  EditPost,
  getPostByPostId,
  getPosts,
  getPostsByPostId,
} from "../../context/actions/post/post.action";
import PostItemWidget from "../widget/post.item.widget";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import axiosInstance2 from "../../helpers/axiosInstance-2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PostService from "../../services/post.service";
import { makeRequest } from "../../helpers/axios";
import dynamic from "next/dynamic";
const Post = ({ userId }) => {
  // const [like, setLike] = useState(post.likes.length);
  // const [isLiked, setIsLiked] = useState(false);
  // const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const PF = process.env.UPLOADS_ENDPOINT;
  // const { user: currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   setIsLiked(post.likes.includes(currentUser._id));
  // }, [currentUser._id, post.likes]);

  const _selectFile = async (e) => {
    setPreviewImage("");
    // alert(e.target.files[0]);
    setFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  // FORM ACTION
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  // CONTEXT API
  const {
    postDispatch,
    postState: {
      createPost: { data: postData, loading: postLoading, error: postError },
      Posts: {
        data: getPostsData,
        loading: getPostsLoading,
        error: getPostsError,
      },
      Post: { data: getPostData, loading: getPostLoading, error: getPostError },
    },
  } = useContext(GlobalContext);

  const {
    isLoading,
    error,
    data: postsData,
  } = useQuery(["posts"], () =>
    axiosInstance2()
      .get(`post/getallpost/${userId}`)
      .then((res) => {
        return res.data;
      })
  );

  // const { isLoading, error, data } = useQuery(["comments"], () =>
  //   PostService.getAllPostComment2(postId)
  // );

  // const queryClient = useQueryClient();

  // const mutation = useMutation(
  //   (newPost) => {
  //     return PostService.addPost(newPost);
  //   },
  //   {
  //     onSuccess: (res) => {
  //       // Invalidate and refetch
  //       toast.success(res?.message);
  //       queryClient.invalidateQueries(["posts"]);
  //     },
  //   },
  //   {
  //     onError: (err) => {
  //       toast.error(err?.message);
  //     },
  //   }
  // );

  const AddPostAction = async (formdata) => {
    if (previewImage !== file.name) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("FileName", fileName);
      data.append("RefId", formdata.UserId);
      data.append("UploadType", "post");
      data.append("file", file);

      formdata.ImgUrl = `post/${formdata.UserId}/${fileName}`;
      console.log("fileName", fileName);

      try {
        await axiosInstance2().post("upload/uploadImage", data);
      } catch (err) {}
    }

    //  mutation.mutate(formdata);

    AddPost(formdata)(postDispatch);

    postData && toast.success(postData?.message);
    postError && toast.error(postError?.message);
  };

  useEffect(() => {
    getPosts(userId)(postDispatch);
    getPostsError && toast.error(getPostsError?.message);
    // if (postEdit === true) {
    //   getPostByPostId(postId)(postDispatch);
    //   setPreviewImage(getPostData.ImgUrl);
    // }
  }, [userId, postData]);

  // console.log("file", file);
  // console.log("postData", postData);
  console.log("getPostsData", postsData);

  return (
    <>
      <div className="news-feed-area">
        <div className="news-feed news-feed-form">
          <h3 className="news-feed-title">Create New Post</h3>

          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(AddPostAction)}
          >
            <input
              type="hidden"
              name="UserId"
              value={userId}
              className="form-control"
              {...register("UserId")}
            />
            <div className="form-group">
              <textarea
                name="Message"
                className="form-control"
                placeholder="Write something here..."
                {...register("Message", {
                  required: true,
                })}
                required
              ></textarea>
              {previewImage && (
                <div className="shareImgContainer">
                  <img className="shareImg" src={previewImage} alt="" />
                  <Cancel
                    className="shareCancelImg"
                    onClick={() => setPreviewImage(null)}
                  />
                </div>
              )}
            </div>

            <ul className="button-group d-flex justify-content-between align-items-center">
              <li className="photo-btn">
                <label htmlFor="file">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    name="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => _selectFile(e)}
                  />
                  <i className="flaticon-gallery"> </i> Photo
                </label>
              </li>

              <li className="video-btn">
                <button type="button" htmlFor="file">
                  <i className="flaticon-video">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </i>{" "}
                  Video
                </button>
              </li>
              <li className="tag-btn">
                <button type="submit">
                  <i className="flaticon-tag"></i> Tag Friends
                </button>
              </li>
              <li className="post-btn">
                <button type="submit" disabled={postLoading}>
                  {postLoading && <i className="fa fa-spinner fa-spin"></i>}{" "}
                  Post
                </button>
              </li>
            </ul>
          </form>
        </div>

        <div className="news-feed news-feed-stories">
          <div className="stories-title d-flex justify-content-between align-items-center">
            <h3>Stories</h3>
            <span>
              <a href="#">See All</a>
            </span>
          </div>

          <div className="row">
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <div className="stories-image">
                  <a href="#">
                    <img src="assets/images/user/user-1.jpg" alt="image" />
                  </a>
                  <div className="add-icon">
                    <a href="#">
                      <i className="flaticon-add"></i>
                    </a>
                  </div>
                </div>
                <span>
                  <a href="#">Add Story</a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <a href="#">
                  <img src="assets/images/user/user-28.jpg" alt="image" />
                </a>
                <span>
                  <a href="#">Jimenez</a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <a href="#">
                  <img src="assets/images/user/user-29.jpg" alt="image" />
                </a>
                <span>
                  <a href="#">Lolita</a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <a href="#">
                  <img src="assets/images/user/user-13.jpg" alt="image" />
                </a>
                <span>
                  <a href="#">Matthew</a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <a href="#">
                  <img src="assets/images/user/user-30.jpg" alt="image" />
                </a>
                <span>
                  <a href="#">Russell</a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="stories-item">
                <a href="#">
                  <img src="assets/images/user/user-31.jpg" alt="image" />
                </a>
                <span>
                  <a href="#">Katzman</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {getPostsData?.map((postItem, i) => (
          <>
            <PostItemWidget post={postItem} userId={userId} i={i} />{" "}
          </>
        ))}

        <div className="load-more-posts-btn">
          <a href="#">
            <i className="flaticon-loading"></i> Load More Posts
          </a>
        </div>
      </div>
    </>
  );
};

//export default Post;

export default dynamic(() => Promise.resolve(Post), { ssr: false });
