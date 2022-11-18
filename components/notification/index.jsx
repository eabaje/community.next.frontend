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

import Link from "next/link";
import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { Users } from "../../constants/dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import moment from "moment";
import $ from "jquery";
//import "./loader.js";
//import "./metismenu.min";

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
              <span>{notify?.data.length}</span>
            </div>
          </a>

          <div className="dropdown-menu">
            <div className="notifications-header d-flex justify-content-between align-items-center">
              <h3>Notifications</h3>
              <i className="flaticon-menu"></i>
            </div>
            <div className="notifications-body" data-simplebar>
              {notify?.data.map((notifyItem, index) => (
                <div className="item d-flex justify-content-between align-items-center">
                  <div className="figure">
                    <a href="#">
                      <img
                        src={
                          notifyItem?.user?.ProfilePicture
                            ? notifyItem?.user?.ProfilePicture
                            : "assets/images/user/user-11.jpg"
                        }
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h4>
                      <a href="#">{notifyItem?.user?.FirstName}</a>
                    </h4>
                    <span>
                      {notifyItem?.event?.comment
                        ? notifyItem?.event?.comment
                        : "Posted A Comment On Your Status"}
                    </span>
                    <span className="main-color">
                      {moment(notifyItem?.event?.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              ))}

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
                <Link href={"/notification"} passHref>
                  <a className="default-btn">View All Notifications</a>
                </Link>
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
