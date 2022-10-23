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

function LeftBar({ user }) {
  const router = useRouter();
  useEffect(() => {
    //let controller = new AbortController();
    if (typeof window !== "undefined") {
      // $("#sidemenu-nav").metisMenu();
    }
    // user===null &&  history.push(`sigin`)
    //  setUser(JSON.parse(localStorage.getItem("user")));
    //  return () => controller?.abort();
  }, []);
  console.log("router.pathname", router.pathname);
  return (
    <>
      <div className="leftBar">
        <div className="col-lg-12 col-md-12">
          <aside className="widget-area">
            {router.pathname === "/home" && (
              <div className="widget widget-view-profile">
                <div className="profile-box d-flex justify-content-between align-items-center">
                  <a href="my-profile.html">
                    <img src="assets/images/user/user-1.jpg" alt="image" />
                  </a>
                  <div className="text ms-2">
                    <h3>
                      <a href="my-profile.html">Matthew Turner</a>
                    </h3>
                    <span>Washington</span>
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
                  <a href="my-profile.html" className="default-btn">
                    View Profile
                  </a>
                </div>
              </div>
            )}
            <Sidebar />
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">Suggested Groups</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg4" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Dream Restaurant</a>
                  </h4>
                  <span>5214 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg5" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Travel Life</a>
                  </h4>
                  <span>9589 Members</span>
                </div>
              </article>
            </div>

            <div className="widget widget-watch-video">
              <h3 className="widget-title">Watch Video</h3>

              <div className="watch-video-slides owl-carousel owl-theme">
                <div className="video-item">
                  <img
                    src="assets/images/watch-video/video-1.jpg"
                    alt="image"
                  />

                  <a
                    href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
                    className="video-btn popup-youtube"
                  >
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
                <div className="video-item">
                  <img
                    src="assets/images/watch-video/video-2.jpg"
                    alt="image"
                  />

                  <a
                    href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
                    className="video-btn popup-youtube"
                  >
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
                <div className="video-item">
                  <img
                    src="assets/images/watch-video/video-3.jpg"
                    alt="image"
                  />

                  <a
                    href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
                    className="video-btn popup-youtube"
                  >
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="widget widget-advertisement">
              <h3 className="widget-title">Advertisement</h3>

              <div className="advertisement-image">
                <a href="#">
                  <img src="assets/images/advertisement.jpg" alt="image" />
                </a>
              </div>
            </div>
            <div className="widget widget-suggested-groups">
              <h3 className="widget-title">Suggested Groups</h3>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">UX/UI Design Group</a>
                  </h4>
                  <span>5000+ Members</span>
                  <a href="#" className="join-btn">
                    Join Community
                  </a>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Job Search Group</a>
                  </h4>
                  <span>5000+ Members</span>
                  <a href="#" className="join-btn">
                    Join Community
                  </a>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Photography Group</a>
                  </h4>
                  <span>5000+ Members</span>
                  <a href="#" className="join-btn">
                    Join Community
                  </a>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(LeftBar), { ssr: false });
