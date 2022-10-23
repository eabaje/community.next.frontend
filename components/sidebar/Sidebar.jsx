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

function Sidebar({ user }) {
  const handleMenu = () => {
    // Metis Menu JS
    // $(function () {
    //   $("#sidemenu-nav").metisMenu();
    // });

    // Responsive Burger Menu JS
    $(".responsive-burger-menu").on("click", function () {
      $(".responsive-burger-menu").toggleClass("active");
      $(".sidemenu-area").toggleClass("active-sidemenu-area");
    });

    // Navbar Burger Menu JS
    $(".navbar-burger-menu").on("click", function () {
      $(".navbar-burger-menu").toggleClass("active");
      $(".sidemenu-area").toggleClass("active-sidemenu-area");
    });

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function () {
      $(".others-option-for-responsive .container .container").toggleClass(
        "active"
      );
    });

    $(".others-link-for-responsive .dot-menu").on("click", function () {
      $(".others-link-for-responsive .container .container").toggleClass(
        "active"
      );
    });
  };

  useEffect(() => {
    //let controller = new AbortController();
    if (typeof window !== "undefined") {
      handleMenu();
      // $("#sidemenu-nav").metisMenu();
    }
    // user===null &&  history.push(`sigin`)
    //  setUser(JSON.parse(localStorage.getItem("user")));
    //  return () => controller?.abort();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            {menuItemsPublic(user).map((menu, index) => {
              return (
                <NavBar
                  key={index}
                  iconName={`${menu.icon}`}
                  path={menu.path}
                  title={menu.title}
                  cssStyle={"sidebarListItemText"}
                />
              );
            })}

            {/* <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />

              <NavBar
                path={"/question"}
                title={"Questions"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <NavBar
                path={"/job"}
                title={"Jobs"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <a href="notifications.html" className="nav-link1">
                <span className="sidebarListItemText">Events</span>
              </a>
            </li> */}
          </ul>

          {/* <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul> */}
        </div>
      </div>

      <div class="sidemenu-area">
        <div class="responsive-burger-menu d-lg-none d-block">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </div>

        <div class="sidemenu-body">
          <ul
            class="sidemenu-nav metisMenu h-100"
            id="sidemenu-nav"
            data-simplebar
          >
            {menuItemsPublic(user).map((menu, index) => {
              return (
                <SideBarMenu
                  key={index}
                  icon={`${menu.icon}`}
                  path={menu.path}
                  title={menu.title}
                />
              );
            })}
            {/* <li class="nav-item active">
              <a href="index.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-newspaper"></i>
                </span>
                <span class="menu-title">News Feed</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="notifications.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-bell"></i>
                </span>
                <span class="menu-title">Notifications</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="messages.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-comment-1"></i>
                </span>
                <span class="menu-title">Messages</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="friends.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-friends"></i>
                </span>
                <span class="menu-title">Friends</span>
              </a>
            </li>

            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">Paternal Links</span>
              </a>
            </li>
            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">Maternal Links</span>
              </a>
            </li>
            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">Spousal Links</span>
              </a>
            </li>
            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">My Classmates</span>
              </a>
            </li>
            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">My Colleagues</span>
              </a>
            </li>
            <li class="nav-item show-mobile">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">My Neighbours </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="favorite.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-star"></i>
                </span>
                <span class="menu-title">Favorite</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="events.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-calendar"></i>
                </span>
                <span class="menu-title">Events</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="live-chat.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-live-chat"></i>
                </span>
                <span class="menu-title">Live Chat</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="birthday.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-cake"></i>
                </span>
                <span class="menu-title">Birthday</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="video.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-video"></i>
                </span>
                <span class="menu-title">Video</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="weather.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-cloudy"></i>
                </span>
                <span class="menu-title">Weather</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="marketplace.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-online-shopping"></i>
                </span>
                <span class="menu-title">Marketplace</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="login.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-user"></i>
                </span>
                <span class="menu-title">Login</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="register.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-information"></i>
                </span>
                <span class="menu-title">Register</span>
              </a>
            </li> */}
          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
