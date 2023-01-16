import React from "react";
import FollowItemWidget from "../widget/follow.item.widget";

function Following({ followings }) {
  return (
    <>
      <div className="widget widget-who-following">
        <h3 className="widget-title">{"Who's Following"}</h3>
        {followings
          ? followings?.map((follow) => {
              <FollowItemWidget user={follow} />;
            })
          : "You have no followings at this time"}
      </div>
    </>
  );
}

export default Following;
