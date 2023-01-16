import React, { useState, useContext, useEffect } from "react";

import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import OtherRelationLink from "../../components/relationLink/relation";
import Post from "../../components/post/Post";
import Birthday from "../../components/birthday";
import Event from "../../components/event";
import Following from "../../components/following";
import AdvertSlider from "../../components/advert/slider";
import { GlobalContext } from "../../context/Provider";
import { getRelationships } from "../../context/actions/relationship/relationship.action";
import { getPosts } from "../../context/actions/post/post.action";
import {
  getAllSchoolPlaceWork,
  getRelations,
} from "../../context/actions/relation/relation.action";
function Home({ query }) {
  const { userId } = query;
  // get events

  //Followings

  //users that are friends/followers

  //All posts
  const {
    postDispatch,
    postState: {
      Posts: {
        data: getPostsData,
        loading: getPostsLoading,
        error: getPostsError,
      },
    },
    relationshipDispatch,
    relationshipState: {
      Relationships: { data: RelationshipData },
    },
    relationDispatch,
    relationState: {
      Relations: { data: RelationData },
      Schools: { data: SchoolData },
      Works: { data: WorkData },
      Places: { data: PlaceData },
    },
  } = useContext(GlobalContext);

  const getAllPosts = (userId) => {
    getPosts(userId)(postDispatch);
  };

  const getAllRelations = (userId) => {
    getRelations(userId)(relationDispatch);
  };

  const getSchools = (userId) => {
    getAllSchoolPlaceWork(userId, "school")(relationDispatch);
  };
  const getPlaces = (userId) => {
    getAllSchoolPlaceWork(userId, "place")(relationDispatch);
  };

  const getWorks = (userId) => {
    getAllSchoolPlaceWork(userId, "school")(relationDispatch);
  };

  const getAllFriends = (userId) => {
    getRelationships(userId, null)(relationshipDispatch);
  };

  useEffect(() => {
    getAllPosts(userId);
    getAllFriends(userId);
    getSchools(userId);
    getPlaces(userId);
    getWorks(userId);
    getAllRelations(userId);
  }, [userId]);

  return (
    <>
      <MainLayout>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row">
              <AdvertSlider />
            </div>
            <OtherRelationLink
              users={RelationData}
              userId={userId}
              school={SchoolData}
              place={PlaceData}
              work={WorkData}
            />
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <Post userId={userId} />
              </div>

              <div className="col-lg-3 col-md-12">
                <aside className="widget-area">
                  <Birthday user={null} />
                  <Event events={null} />
                  <Following followings={null} />
                </aside>
              </div>
            </div>
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
export default dynamic(() => Promise.resolve(Home), { ssr: false });
