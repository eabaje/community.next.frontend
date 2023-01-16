import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { GlobalContext } from "../../context/Provider";
import {
  AddPostComment,
  getComments,
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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PostService from "../../services/post.service";
import { makeRequest } from "../../helpers/axios";
const PostCommentWidget = ({ postId, post }) => {
  const handleLike = () => {
    // mutation.mutate(data.includes(currentUser.id));
  };

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get(`post/getallpostcomment?postId=${postId}`).then((res) => {
      return res.data;
    })
  );

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
      createComment: {
        data: addComment,
        loading: addCommentLoading,
        error: addCommentError,
      },
      Comments: {
        data: getCommentsData,
        loading: getCommentsLoading,
        error: getCommentsError,
      },
    },
  } = useContext(GlobalContext);

  const AddPostCommentAction = (formdata) => {
    console.log("formComment", formdata);
    AddPostComment(formdata)(postDispatch);

    addComment && toast.success(addComment?.message);
    addCommentError && toast.error(addCommentError?.message);
  };

  // const { isLoading, error, data } = useQuery(["comments"], () =>
  //   PostService.getAllPostComment2(postId)
  // );

  useEffect(() => {
    // if (postEdit === true) {
    // const data = PostService.getAllPostComment2(postId);
    //  console.log("d", data);
    // getComments(postId)(postDispatch);
    //   setPreviewImage(getPostData.ImgUrl);
    // }
  }, [addComment]);

  console.log("getCommentsData", data);
  return (
    <>
      <div class="post-comment-list">
        {error
          ? error
          : isLoading
          ? "loading"
          : data?.map((comment) => (
              <>
                <div class="comment-list">
                  <div class="comment-image">
                    <Link href={`home/?userId=${comment?.UserId}`}>
                      <a>
                        <img
                          src={
                            comment?.user?.ProfilePicture
                              ? comment?.user?.ProfilePicture
                              : "assets/images/user/user-35.jpg"
                          }
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div class="comment-info">
                    <h3>
                      <Link href={`home/?userId=${comment?.UserId}`}>
                        <a>
                          {comment?.user?.FirstName
                            ? comment?.user?.FirstName +
                              " " +
                              comment?.user?.LastName
                            : "William Fenton"}
                        </a>
                      </Link>
                    </h3>
                    <span>
                      {comment?.createdAt
                        ? moment(comment?.createdAt).fromNow()
                        : ""}{" "}
                    </span>
                    <p>{comment?.Comment ? comment?.Comment : ""}</p>
                    <ul class="comment-react">
                      <li>
                        <a href="#" class="like">
                          Like( {comment?.Comment ? comment?.Comment : ""})
                        </a>
                      </li>
                      <li>
                        <a href="#">Reply</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ))}
        <div class="more-comments">
          <a href="#">More Comments+</a>
        </div>
      </div>
      <form
        className="post-footer"
        encType="multipart/form-data"
        onSubmit={handleComment(AddPostCommentAction)}
      >
        <div className="footer-image">
          <a href="#">
            <img
              src={
                post?.user?.ProfilePicture
                  ? post?.user?.ProfilePicture
                  : "assets/images/user/user-2.jpg"
              }
              className="rounded-circle"
              alt="image"
            />
          </a>
        </div>
        <div className="form-group">
          <input
            type="hidden"
            name="UserId"
            value={post?.UserId}
            className="form-control"
            {...registerComment("UserId")}
          />
          <input
            type="hidden"
            name="UserPostId"
            value={post?.UserPostId}
            className="form-control"
            {...registerComment("UserPostId")}
          />
          <textarea
            name="Message"
            className="form-control"
            placeholder="Write a comment..."
            {...registerComment("Comment")}
            required
          ></textarea>
          <label>
            <button type="submit">
              <i className="flaticon-photo-camera"></i>
            </button>
          </label>
        </div>
      </form>
    </>
  );
};

export default PostCommentWidget;
