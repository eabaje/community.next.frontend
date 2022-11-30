import React from "react";

const ClassmateWidget = ({ user, className }) => {
  return (
    <>
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
              <button type="submit">Join Group</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClassmateWidget;
