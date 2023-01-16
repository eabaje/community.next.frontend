//import "../../styles/share.module.css";
import { MoreVert } from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import { GlobalContext } from "../../context/Provider";
import {
  AddPost,
  EditPost,
  getPostByPostId,
  getPosts,
  getPostsByPostId,
} from "../../context/actions/post/post.action";

import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import axiosInstance2 from "../../helpers/axiosInstance-2";

import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";

import PostItemWidget from "../../components/widget/post.item.widget";
function Index({ query }) {
  // const router = useRouter()
  const { userId } = query;

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

  useEffect(() => {
    getPosts(userId)(postDispatch);
    getPostsError && toast.error(getPostsError?.message);
    // if (postEdit === true) {
    //   getPostByPostId(postId)(postDispatch);
    //   setPreviewImage(getPostData.ImgUrl);
    // }
  }, [userId]);
  return (
    <>
      <MainLayout>
        <div class="page-banner-box bg-5">
          <h3>Post Gallery</h3>
        </div>
        <div class="groups-inner-box-style d-flex justify-content-between align-items-center">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">All Post</li>
            {/* <li class="nav-item">
              <a
                class="nav-link"
                id="most-members-tab"
                data-bs-toggle="tab"
                href="#most-members"
                role="tab"
                aria-controls="most-members"
              >
                Most Members
              </a>
            </li> */}
          </ul>

          <div class="groups-search-box">
            <form>
              <input
                type="text"
                class="input-search"
                placeholder="Search Post..."
              />
              <button type="submit">
                <i class="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="row justify-content-center">
          <div className="news-feed-area">
            {getPostsData?.map((postItem, i) => (
              <>
                <PostItemWidget post={postItem} userId={userId} i={i} />
              </>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
