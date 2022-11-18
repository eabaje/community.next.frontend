import "../../styles/sidebar.module.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  People,
  Person,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import {
  AccessAlarm,
  Man,
  Woman,
  HolidayVillage,
  Timeline,
  ThreeDRotation,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";
import dynamic from "next/dynamic";
import { Users } from "../../constants/dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

import $ from "jquery";
//import "./loader.js";
//import "./metismenu.min";
import { useContext, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { menuItemsPublic } from "../navbar/vertical/sidebarData";
import SideBarMenu from "../navbar/vertical/sidebarMenu";
import Sidebar from "./Sidebar";
import PaternalLink from "../relationLink/paternal";
import { useRouter } from "next/router";
import SuggestedGroupWidget from "../widget/suggestedGroup";
import VideoWidget from "../widget/video";
import AdvertWidget from "../widget/advert";

function LeftBar({ user }) {
  const router = useRouter();
  useEffect(() => {
    //let controller = new AbortController();
    if (typeof window !== "undefined") {
      // $("#sidemenu-nav").metisMenu();
    }
  }, []);
  console.log("router.pathname", user);
  return (
    <>
      <div className="leftBar">
        <div className="col-lg-12 col-md-12">
          <aside className="widget-area">
            {router.pathname === "/home" && (
              <div className="widget widget-view-profile">
                <div className="profile-box d-flex justify-content-between align-items-center">
                  <a href="/profile">
                    <img
                      src={
                        user?.ProfilePicture
                          ? user?.ProfilePicture
                          : "assets/images/user/user-1.jpg"
                      }
                      alt="image"
                    />
                  </a>
                  <div className="text ms-2">
                    <h3>
                      <a href="/profile">{user?.FullName}</a>
                    </h3>
                    <span>{user?.Address}</span>
                  </div>
                </div>
                <ul className="profile-statistics">
                  <li>
                    <a href="#">
                      <span className="item-number">59862</span>
                      <span className="item-text">Likes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="item-number">8591</span>
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
                    <i className="flaticon-heart-shape-outline"></i> New Likes
                    This Week
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
                  <a href="/profile" className="default-btn">
                    View Profile
                  </a>
                </div>
              </div>
            )}
            <Sidebar />
            <p></p>
            <div className="leftBarDown">
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"My Groups"}
                showButton={true}
              />
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"Suggested Groups"}
                showButton={false}
              />
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"Pages you like"}
                showButton={false}
              />
              <VideoWidget userId={user?.UserId} />
              <AdvertWidget userId={user?.UserId} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(LeftBar), { ssr: false });
