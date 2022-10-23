import React from "react";

const ProfileWidget = ({ query }) => {
  return (
    <>
      <div className="widget widget-view-profile">
        <div className="profile-box d-flex justify-content-between align-items-center">
          <a href="my-profile.html">
            <img
              src={user ? user?.imgUrl : "assets/images/user/user-1.jpg"}
              alt="image"
            />
          </a>
          <div className="text ms-2">
            <h3>
              <a href="my-profile.html">{user?.FullName}</a>
            </h3>
            <span>{user?.Region}</span>
          </div>
        </div>
        <ul className="profile-statistics">
          <li>
            <a href="#">
              <span className="item-number">{user?.Post?.Likes}</span>
              <span className="item-text">Likes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item-number">{user?.Following?.Followings}</span>
              <span className="item-text">Following</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item-number">784514</span>
              <span className="item-text">Followers</span>
            </a>
          </li>
        </ul>
        <div className="profile-likes">
          <span>
            <i className="flaticon-heart-shape-outline"></i> New Likes This Week
          </span>

          <ul>
            <li>
              <a href="#">
                <img src="assets/images/user/user-22.jpg" alt="image" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/user/user-23.jpg" alt="image" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/user/user-24.jpg" alt="image" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/user/user-25.jpg" alt="image" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/user/user-26.jpg" alt="image" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/user/user-27.jpg" alt="image" />
              </a>
            </li>
          </ul>
        </div>
        <div className="profile-btn">
          <a href="my-profile.html" className="default-btn">
            View Profile
          </a>
        </div>
      </div>
    </>
  );
};
export default ProfileWidget;
