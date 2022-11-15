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

function Message({ message }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="option-item">
        <div className="dropdown messages-nav-item">
          <a
            href="#"
            className="dropdown-bs-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="messages-btn">
              <i className="flaticon-email"></i>
              <span>2</span>
            </div>
          </a>

          <div className="dropdown-menu">
            <div className="messages-header d-flex justify-content-between align-items-center">
              <h3>Messages</h3>
              <i className="flaticon-menu"></i>
            </div>
            <div className="messages-search-box">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search Message..."
                />
                <button type="submit">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </div>
            <div className="messages-body" data-simplebar>
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
                  <span>Hello Dear I Want Talk To You</span>
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
                  <span>Hi. I Am looking For UI Designer</span>
                </div>
              </div>

              <div className="item d-flex justify-content-between align-items-center">
                <div className="figure">
                  <a href="#">
                    <img
                      src="assets/images/user/user-3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Matthew Smith</a>
                  </h4>
                  <span>Thanks For Connecting!</span>
                </div>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <div className="figure">
                  <a href="#">
                    <img
                      src="assets/images/user/user-4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Russe Smith</a>
                  </h4>
                  <span>Thanks For Connecting!</span>
                </div>
              </div>
              <div className="view-all-messages-btn">
                <a href="messages.html" className="default-btn">
                  View All Messages
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
export default dynamic(() => Promise.resolve(Message), { ssr: false });
