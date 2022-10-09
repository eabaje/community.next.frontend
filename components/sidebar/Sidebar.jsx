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
import { Users } from "../../constants/dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

import $ from "jquery";
//import "./metismenu.min";
import { useContext, useEffect } from "react";
import NavBar from "../navbar/navbar";

export default function Sidebar() {
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
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <NavBar
                path={"/timeline"}
                title={"Timeline"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <NavBar
                path={"/chat"}
                title={"Chats"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <NavBar
                path={"/video"}
                title={"Videos"}
                cssStyle={"sidebarListItemText"}
              />
            </li>

            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <NavBar
                path={"/friend"}
                title={"Friends"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <NavBar
                path={"/group"}
                title={"Groups"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <Man className="sidebarIcon" />
              <NavBar
                path={"/paternal"}
                title={"Paternal Links"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <Woman className="sidebarIcon" />
              <NavBar
                path={"/maternal"}
                title={"Maternal Links"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <HolidayVillage className="sidebarIcon" />
              <NavBar
                path={"/neighbour"}
                title={"Neighbour Links"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <NavBar
                path={"/colleague"}
                title={"Colleague Links"}
                cssStyle={"sidebarListItemText"}
              />
            </li>
            <li className="sidebarListItem">
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
            </li>
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

      {/* <div class="sidemenu-area">
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
            <li class="nav-item active">
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
            <li class="nav-item">
              <a href="groups.html" class="nav-link">
                <span class="icon">
                  <i class="flaticon-team"></i>
                </span>
                <span class="menu-title">Groups</span>
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
            </li>
          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}
