import moment from "moment";
import React from "react";

const GroupWidget = ({ groupItem }) => {
  const rndImages = [
    {
      imgBg: "assets/images/groups/groups-bg-5.jpg",
      img: "assets/images/groups/groups-5.jpg",
    },
    {
      imgBg: "assets/images/groups/groups-bg-4.jpg",
      img: "assets/images/groups/groups-4.jpg",
    },
    {
      imgBg: "assets/images/groups/groups-bg-3.jpg",
      img: "assets/images/groups/groups-3.jpg",
    },
    {
      imgBg: "assets/images/groups/groups-bg-2.jpg",
      img: "assets/images/groups/groups-2.jpg",
    },

    {
      imgBg: "assets/images/groups/groups-bg-1.jpg",
      img: "assets/images/groups/groups-1.jpg",
    },
  ];
  let randomValue = rndImages[Math.floor(Math.random() * rndImages.length)];
  return (
    <>
      <div class="col-lg-3 col-sm-6">
        <div class="single-groups-card">
          <div class="groups-image">
            <a href="#">
              <img src={randomValue.imgBg} alt="image" />
            </a>
          </div>
          <div class="groups-content">
            <div class="groups-info d-flex justify-content-between align-items-center">
              <a href="#">
                <img src={randomValue.img} alt="image" />
              </a>
              <div class="text ms-3">
                <h3>
                  <a href="#">{groupItem?.Title}</a>
                </h3>
                <span>Public Groups</span>
              </div>
            </div>
            <ul class="statistics">
              <li>
                <a href="#">
                  <span class="item-number">
                    {groupItem?.GroupPost}
                    {
                      groupItem?.GroupPost?.filter(
                        (item) => item?.Likes !== null
                      ).length
                    }
                  </span>
                  <span class="item-text">Post</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">
                    {groupItem?.GroupMember?.length}
                  </span>
                  <span class="item-text">Members</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="item-number">
                    {moment(groupItem?.createdAt).fromNow()}
                  </span>
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
export default GroupWidget;
