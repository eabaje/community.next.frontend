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

function Notification({ notify }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="option-item">
        <div className="dropdown notifications-nav-item">
          <a
            href="#"
            className="dropdown-bs-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="notifications-btn">
              <i className="flaticon-bell"></i>
              <span>1</span>
            </div>
          </a>

          <div className="dropdown-menu">
            <div className="notifications-header d-flex justify-content-between align-items-center">
              <h3>Notifications</h3>
              <i className="flaticon-menu"></i>
            </div>
            <div className="notifications-body" data-simplebar>
              <div className="item d-flex justify-content-between align-items-center">
                <div className="figure">
                  <a href="#">
                    <img
                      src="assets/images/user/user-11.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">James Vanwin</a>
                  </h4>
                  <span>Posted A Comment On Your Status</span>
                  <span className="main-color">20 Minites Ago</span>
                </div>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <div className="figure">
                  <a href="#">
                    <img
                      src="assets/images/user/user-12.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Harry Lopez</a>
                  </h4>
                  <span>Sent You A Friend Request</span>
                  <span className="main-color">2 Days Ago</span>
                </div>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <div className="figure">
                  <a href="#">
                    <img
                      src="assets/images/user/user-13.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Matthew Smith</a>
                  </h4>
                  <span>Add A Photo In Design Group</span>
                  <span className="main-color">3 Days Ago</span>
                </div>
              </div>

              <div className="view-all-notifications-btn">
                <a href="notifications.html" className="default-btn">
                  View All Notifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(Notification), { ssr: false });
