import React from "react";

const FollowWidget = ({ user }) => {
  return (
    <>
      <article className="item">
        <a href="#" className="thumb">
          <span className="fullimage bg1" role="img">
            <img src={user?.ProfilePicture} />
          </span>
        </a>

        <div className="info">
          <h4 className="title">
            <a href="#">{user?.FullName}Chief Eze Nwannu</a>
          </h4>
          <span>{user?.Follower}1215 Members</span>
          {user?.Status === "online" ? (
            <span className="status-online"></span>
          ) : (
            <span className="status-offline"></span>
          )}
        </div>
      </article>
    </>
  );
};
export default FollowWidget;
