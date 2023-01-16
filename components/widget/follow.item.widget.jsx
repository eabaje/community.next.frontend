import React from "react";

const FollowItemWidget = ({ user }) => {
  return (
    <>
      <div className="following-item d-flex justify-content-between align-items-center">
        <a href="#">
          <img
            src={
              user?.ProfilePicture
                ? user?.ProfilePicture
                : "assets/images/user/user-42.jpg"
            }
            className="rounded-circle"
            alt="image"
          />
        </a>
        <span className="name">
          <a href="#">{user?.FullName}</a>
        </span>
        <span className="add-friend">
          <a href="#">Add</a>
        </span>
      </div>
    </>
  );
};
export default FollowItemWidget;
