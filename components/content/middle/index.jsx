import React from "react";
import AdvertSlider from "../../advert/slider";
import Birthday from "../../birthday";
import Event from "../../event";
import Following from "../../following";
import Post from "../../post/Post";
import PaternalLink from "../../relationLink/paternal";
import OtherRelationLink from "../../relationLink/relation";
import Sidebar from "../../sidebar/Sidebar";

function FirstMiddleContent({ userId }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <AdvertSlider />
          </div>
          <OtherRelationLink users={null} userId={userId} />
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <Post />
            </div>

            <div className="col-lg-3 col-md-12">
              <aside className="widget-area">
                <Birthday />
                <Event />
                <Following />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstMiddleContent;
