import React from "react";

const FriendWidget = ({ user }) => {
  return (
    <>
      <div class="col-lg-3 col-sm-6">
        <div class="single-friends-card">
          <div class="friends-image">
            <a href="#">
              <img
                src={
                  user?.ProfilePicture
                    ? user?.ProfilePicture
                    : "assets/images/friends/friends-bg-1.jpg"
                }
                alt="image"
              />
            </a>
            <div class="icon">
              <a href="#">
                <i class="flaticon-user"></i>
              </a>
            </div>
          </div>
          <div class="friends-content">
            <div class="friends-info d-flex justify-content-between align-items-center">
              <a href="#">
                <img
                  src={
                    user?.ProfilePicture
                      ? user?.ProfilePicture
                      : "assets/images/friends/friends-1.jpg"
                  }
                  alt="image"
                />
              </a>
              <div class="text ms-3">
                <h3>
                  <a href="#">{user?.FullName}</a>
                </h3>
                <span>{user?.FullName}10 Mutual Friends</span>
              </div>
            </div>
            <ul class="statistics">
              <li>
                <a href="#">
                  <span class="item-number">862</span>
                  <span class="item-text">Likes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">91</span>
                  <span class="item-text">Following</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">514</span>
                  <span class="item-text">Followers</span>
                </a>
              </li>
            </ul>
            <div class="button-group d-flex justify-content-between align-items-center">
              <div class="add-friend-btn">
                <button type="submit">Add Friend</button>
              </div>
              <div class="send-message-btn">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6">
        <div class="single-groups-card">
          <div class="groups-image">
            <a href="#">
              <img src={user?.ProfilePicture} alt="image" />
            </a>
          </div>
          <div class="groups-content">
            <div class="groups-info d-flex justify-content-between align-items-center">
              <a href="#">
                <img src={user?.ProfilePicture} alt="image" />
              </a>
              <div class="text ms-3">
                <h3>
                  <a href="#">{user?.FullName}Graphic Design</a>
                </h3>
                <span>{user?.FullName}Public Classmates</span>
              </div>
            </div>
            <ul class="statistics">
              <li>
                <a href="#">
                  <span class="item-number">{user?.Post}</span>
                  <span class="item-text">Post</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">{user?.FullName}6451</span>
                  <span class="item-text">Members</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">{user?.FullName}2016</span>
                  <span class="item-text">Since</span>
                </a>
              </li>
            </ul>
            <div class="join-groups-btn">
              <button type="submit">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendWidget;
