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

import $ from "jquery";
//import "./loader.js";
//import "./metismenu.min";

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
              <span>{message?.data.length}</span>
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
              {message?.data.map((msgItem, index) => (
                <div className="item d-flex justify-content-between align-items-center">
                  <div className="figure">
                    <a href="#">
                      <img
                        src={
                          msgItem?.user?.ProfilePicture
                            ? msgItem?.user?.ProfilePicture
                            : "assets/images/user/user-11.jpg"
                        }
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h4>
                      <a href="#">{msgItem?.user?.FullName}</a>
                    </h4>
                    <span>{msgItem?.Message}</span>
                  </div>
                </div>
              ))}

              <div className="view-all-messages-btn">
                <Link href={"/message"} passHref>
                  <a className="default-btn">View All Messages</a>
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
export default dynamic(() => Promise.resolve(Message), { ssr: false });
