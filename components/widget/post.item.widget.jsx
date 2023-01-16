import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { GlobalContext } from "../../context/Provider";
import PostCommentWidget from "./post.comment.widget";
import {
  AddPostComment,
  deletePost,
  EditPost,
  getComments,
  getPostByPostId,
} from "../../context/actions/post/post.action";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import axiosInstance2 from "../../helpers/axiosInstance-2";
import { UPLOADS_URL } from "../../constants";
import { selectProps } from "../../helpers/selectProps";
//import "../../styles/post.module.css";
const PostItemWidget = ({ post, userId, i }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [filePost, setFilePost] = useState(null);
  const [previewImagePost, setPreviewImagePost] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  //const [isEditFormOpen, setIsEditFormOpen] = useState(0);
  const PF = process.env.UPLOADS_ENDPOINT;
  useEffect(() => {}, [userId]);

  const _selectFilePost = async (e) => {
    setPreviewImagePost(null);
    // alert(e.target.files[0]);
    setFilePost(e.target.files[0]);
    setPreviewImagePost(URL.createObjectURL(e.target.files[0]));
  };

  // FORM ACTION :registerPost
  const {
    register: registerPost,
    formState: { errors },
    handleSubmit: handlePost,
    setValue: setValuePost,
    control: controlPost,
  } = useForm();
  const {
    register: registerComment,
    handleSubmit: handleComment,
    setValue: setValueComment,
    control: controlComment,
  } = useForm();
  // CONTEXT API
  const {
    setIsEditFormOpen,
    isEditFormOpen,
    postDispatch,
    postState: {
      createPost: { data: editData, loading: postLoading, error: postError },
      deletePost: {
        data: deletedData,
        loading: deletePostLoading,
        error: deletePostError,
      },

      Likes: {
        data: getLikesData,
        loading: getLikesLoading,
        error: getLikesError,
      },
    },
  } = useContext(GlobalContext);

  // const handleLike = () => {
  //   mutation.mutate(data.includes(currentUser.id));
  // };

  const IsEditPostAction = (img, id, dt, postCount) => {
    //check if only one post edit form is open

    if (postCount == 1) {
      toast.success("You can only edit one post at a time");
      return;
    }

    setIsEdit(true);
    setPreviewImagePost(img);
    document.getElementById("p" + id).style.display = "none";
    document.getElementById("div" + id).style.display = "none";
    setValuePost(`objItem[${id}].Message`, dt);

    setIsEditFormOpen((postCount += 1));
  };

  const IsHidePostAction = (userPostId, id, isActive) => {
    //check if only one post edit form is open

    //const objItem = [{ IsActive: false, UserPostId: userPostId }];

    // get the array of objects with values

    const formObj = {
      objItem: [
        {
          IsActive: isActive == 0 ? 1 : 0,
          UserPostId: userPostId,
          UserId: userId,
        },
      ],
    };

    console.log("form", formObj);
    EditPost(userPostId, formObj)(postDispatch);

    editData && toast.success("Post has been made inactive");

    document.getElementById("pbody" + id).style.display = "none";
    // document.getElementById("div" + id).style.display = "none";
  };

  const IsDeletePostAction = (userPostId, id) => {
    //check if only one post edit form is open
    isDelete = confirm("Are you sure you want to delete this post?");
    isDelete && deletePost(userPostId)(postDispatch);
    deletedData && toast.success("Post has been deleted");
    document.getElementById("p" + id).style.display = "none";
    document.getElementById("div" + id).style.display = "none";
  };

  const EditPostAction = async (formdata) => {
    if (previewImagePost) {
      const data = new FormData();
      const fileName = Date.now() + filePost.name;
      data.append("FileName", fileName);
      data.append("RefId", userId);
      data.append("UploadType", "post");
      data.append("file", filePost);

      formdata.ImgUrl = `post/${userId}/${fileName}`;
      console.log("fileName", fileName);

      try {
        await axiosInstance2().post("upload/uploadImage", data);
      } catch (err) {}
    }

    // get the array of objects with values
    const newChildArray = formdata.objItem.map(
      selectProps("Message", "UserId", "UserPostId")
    );
    const formObj = {
      ImgUrl: formdata.ImgUrl,
      objItem: newChildArray.flat(),
    };
    console.log("newChildArray", formObj);

    EditPost(formdata.UserPostId, formObj)(postDispatch);
    setIsEditFormOpen((isEditFormOpen -= 1));
    editData && toast.success(editData?.message);
    postError && toast.error(postError?.message);
  };

  return (
    <>
      <div className="news-feed news-feed-post">
        <div className="post-header d-flex justify-content-between align-items-center">
          <div className="image">
            <Link href={`home/?userId=${post?.UserId}`}>
              <a>
                <img
                  src={
                    post?.user?.ProfilePicture
                      ? UPLOADS_URL + post?.user?.ProfilePicture
                      : "assets/images/user/user-35.jpg"
                  }
                  className="rounded-circle"
                  alt="image"
                />
              </a>
            </Link>
          </div>
          <div className="info ms-3">
            <span className="name">
              <Link href={`home/?userId=${post?.UserId}`}>
                <a>
                  {post?.user?.FirstName
                    ? post?.user?.FirstName + " " + post?.user?.LastName
                    : "William Fenton"}
                </a>
              </Link>
            </span>
            <span className="small-text">
              {moment(post?.createdAt).fromNow()}
            </span>
          </div>
          {post?.UserId === userId && (
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="flaticon-menu"></i>
              </button>
              <ul className="dropdown-menu">
                <li id={i}>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    onClick={(e) =>
                      IsEditPostAction(
                        post?.ImgUrl,
                        i,
                        post?.Message,
                        isEditFormOpen
                      )
                    }
                  >
                    <i className="flaticon-edit"></i> Edit Post
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    onClick={(e) =>
                      IsHidePostAction(post?.UserPostId, i, post?.IsActive)
                    }
                  >
                    <i className="flaticon-private"></i>
                    {post?.IsActive === 1 ? "Hide Post" : "Show Post"}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    onClick={(e) => IsDeletePostAction(post?.UserPostId, i)}
                  >
                    <i className="flaticon-trash"></i> Delete Post
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div id={`pbody${i}`} className="post-body">
          <p id={`p${i}`}>{post?.Message ? post?.Message : ""}</p>

          <div className="post-image" id={`div${i}`}>
            <img
              src={
                post?.ImgUrl
                  ? UPLOADS_URL + post?.ImgUrl
                  : "assets/images/news-feed-post/post-2.jpg"
              }
              alt="image"
            />
          </div>
          {isEdit && (
            <>
              <form
                class="edit-post-form"
                encType="multipart/form-data"
                onSubmit={handlePost(EditPostAction)}
              >
                <input
                  type="hidden"
                  name={`objItem[${i}].UserId`}
                  value={userId}
                  className="form-control"
                  {...registerPost(`objItem[${i}].UserId`)}
                />
                <input
                  type="hidden"
                  name={`objItem[${i}].UserPostId`}
                  value={post?.UserPostId}
                  className="form-control"
                  {...registerPost(`objItem[${i}].UserPostId`)}
                />

                <div className="form-group">
                  <textarea
                    //  name="Message"
                    name={`objItem[${i}].Message`}
                    className="form-control"
                    placeholder="Write something here..."
                    {...registerPost(`objItem[${i}].Message`, {
                      required: true,
                    })}
                    required
                  ></textarea>
                  {previewImagePost !== null && (
                    <div className="shareImgContainer">
                      <img
                        id={`img${i}`}
                        className="shareImg"
                        src={previewImagePost}
                        alt=""
                      />
                      <Cancel
                        className="shareCancelImg"
                        onClick={() => setPreviewImagePost(null)}
                      />
                    </div>
                  )}
                </div>

                <ul className="button-group d-flex justify-content-between align-items-center">
                  <li className="photo-btn">
                    <label htmlFor="filePost">
                      <input
                        style={{ display: "none" }}
                        type="file"
                        id="filePost"
                        name="filePost"
                        accept=".png,.jpeg,.jpg"
                        onChange={(e) => _selectFilePost(e)}
                      />
                      <i className="flaticon-gallery"> </i> Photo
                    </label>
                  </li>

                  <li className="video-btn">
                    <button type="button" htmlFor="filePost">
                      <i className="flaticon-video">
                        <input
                          style={{ display: "none" }}
                          type="file"
                          id="filePost"
                          accept=".png,.jpeg,.jpg"
                          onChange={(e) => setFilePost(e.target.files[0])}
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
            </>
          )}
          <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
            <li className="post-react">
              <a href="#">
                <i className="flaticon-like"></i>
                <span>Like</span>{" "}
                <span className="number">
                  {post?.user_post_likes ? post?.user_post_likes?.length : "0"}
                </span>
              </a>

              <ul className="react-list">
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-1.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-2.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-3.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-4.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-5.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-6.png" alt="Like" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/react/react-7.png" alt="Like" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="post-comment">
              <a
                href="javascript:void(0)"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <i className="flaticon-comment"></i>
                <span>Comment</span>{" "}
                <span className="number">
                  {post?.user_post_comments
                    ? post?.user_post_comments?.length
                    : "0"}{" "}
                </span>
              </a>
            </li>
            <li className="post-share">
              <a href="#">
                <i className="flaticon-share"></i>
                <span>Share</span>{" "}
                <span className="number">
                  {" "}
                  {post?.Share ? post?.Share : "0"}{" "}
                </span>
              </a>
            </li>
          </ul>
          {commentOpen && (
            <PostCommentWidget postId={post.UserPostId} post={post} />
          )}
        </div>
      </div>
    </>
  );
};
export default PostItemWidget;
