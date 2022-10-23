import "../../styles/topbar.module.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
//import { Link } from "react-router-dom";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { topMenuItemsPublic } from "../navbar/vertical/topBarData";
import TopBarNav from "../navbar/vertical/topBarNav";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      {/* <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MyCommnunity</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div> */}

      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="main-responsive-menu">
            <div className="responsive-burger-menu d-lg-none d-block">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a
              href="index.html"
              className="navbar-brand d-flex align-items-center"
            >
              <img src="assets/images/logo.png" alt="image" />
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-burger-menu m-auto">
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </div>

              <div className="search-box m-auto">
                <form>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search..."
                  />
                  <button type="submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>

              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <a href="index.html" className="home-btn">
                    <i className="flaticon-home"></i>
                  </a>
                </div>
                <div className="option-item">
                  <div className="dropdown friend-requests-nav-item">
                    <a
                      href="#"
                      className="dropdown-bs-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="friend-requests-btn">
                        <i className="flaticon-user"></i>
                        <span>3</span>
                      </div>
                    </a>

                    <div className="dropdown-menu">
                      <div className="friend-requests-header d-flex justify-content-between align-items-center">
                        <h3>Friend Requests</h3>
                        <i className="flaticon-menu"></i>
                      </div>

                      <div className="friend-requests-body" data-simplebar>
                        <div className="item d-flex align-items-center">
                          <div className="figure">
                            <a href="#">
                              <img
                                src="assets/images/user/user-2.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
                            </a>
                          </div>

                          <div className="content d-flex justify-content-between align-items-center">
                            <div className="text">
                              <h4>
                                <a href="#">Sandra Cross</a>
                              </h4>
                              <span>26 Friends</span>
                            </div>
                            <div className="btn-box d-flex align-items-center">
                              <button
                                className="delete-btn d-inline-block me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                type="button"
                              >
                                <i className="ri-close-line"></i>
                              </button>

                              <button
                                className="confirm-btn d-inline-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Confirm"
                                type="button"
                              >
                                <i className="ri-check-line"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="item d-flex align-items-center">
                          <div className="figure">
                            <a href="#">
                              <img
                                src="assets/images/user/user-3.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
                            </a>
                          </div>

                          <div className="content d-flex justify-content-between align-items-center">
                            <div className="text">
                              <h4>
                                <a href="#">Kenneth Crowe</a>
                              </h4>
                              <span>53 Friends</span>
                            </div>
                            <div className="btn-box d-flex align-items-center">
                              <button
                                className="delete-btn d-inline-block me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                type="button"
                              >
                                <i className="ri-close-line"></i>
                              </button>

                              <button
                                className="confirm-btn d-inline-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Confirm"
                                type="button"
                              >
                                <i className="ri-check-line"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="view-all-requests-btn">
                          <a href="friends.html" className="default-btn">
                            View All Requests
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="option-item">
                  <div className="dropdown language-option">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="flaticon-global"></i>
                      <span className="lang-name"></span>
                    </button>
                    <div className="dropdown-menu language-dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <img src="assets/images/uk.png" alt="flag" />
                        Eng
                      </a>
                      <a className="dropdown-item" href="#">
                        <img src="assets/images/china.png" alt="flag" />
                        简体中文
                      </a>
                      <a className="dropdown-item" href="#">
                        <img src="assets/images/uae.png" alt="flag" />
                        العربيّة
                      </a>
                    </div>
                  </div>
                </div>
                <div className="option-item">
                  <div className="dropdown profile-nav-item">
                    <a
                      href="#"
                      className="dropdown-bs-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="menu-profile">
                        <img
                          src="assets/images/user/user-1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span className="name">Matthew</span>
                        <span className="status-online"></span>
                      </div>
                    </a>

                    <div className="dropdown-menu">
                      <div className="profile-header">
                        <h3>Matthew Turner</h3>
                        <a href="mailto:matthew507@gmail.com">
                          matthew507@gmail.com
                        </a>
                      </div>
                      <ul className="profile-body">
                        <li>
                          <i className="flaticon-user"></i>{" "}
                          <Link href={"/profile"} passHref>
                            <a>My Profile</a>
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-settings"></i>{" "}
                          <Link href={"/setting"} passHref>
                            <a>Setting</a>
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-privacy"></i>{" "}
                          <Link href={"/privacy"} passHref>
                            <a href="privacy.html">Privacy</a>
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-information"></i>{" "}
                          <Link href={"/support"} passHref>
                            <a>Help & Support</a>
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-logout"></i>{" "}
                          <Link href={"#"} passHref>
                            <a>Logout</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="others-link-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="index.html" className="home-btn white-font">
                      <i className="flaticon-home"></i> Find Maternal Links
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="index.html" className="home-btn">
                      <i className="flaticon-home"></i>
                    </a>
                  </div>
                  <div className="option-item">
                    <div className="dropdown friend-requests-nav-item">
                      <a
                        href="#"
                        className="dropdown-bs-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="friend-requests-btn">
                          <i className="flaticon-user"></i>
                          <span>3</span>
                        </div>
                      </a>

                      <div className="dropdown-menu">
                        <div className="friend-requests-header d-flex justify-content-between align-items-center">
                          <h3>Friend Requests</h3>
                          <i className="flaticon-menu"></i>
                        </div>

                        <div className="friend-requests-body">
                          <div className="item d-flex align-items-center">
                            <div className="figure">
                              <a href="#">
                                <img
                                  src="assets/images/user/user-2.jpg"
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </a>
                            </div>

                            <div className="content d-flex justify-content-between align-items-center">
                              <div className="text">
                                <h4>
                                  <a href="#">Sandra Cross</a>
                                </h4>
                                <span>26 Friends</span>
                              </div>
                              <div className="btn-box d-flex align-items-center">
                                <button
                                  className="delete-btn d-inline-block me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  type="button"
                                >
                                  <i className="ri-close-line"></i>
                                </button>

                                <button
                                  className="confirm-btn d-inline-block"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Confirm"
                                  type="button"
                                >
                                  <i className="ri-check-line"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="item d-flex align-items-center">
                            <div className="figure">
                              <a href="#">
                                <img
                                  src="assets/images/user/user-3.jpg"
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </a>
                            </div>

                            <div className="content d-flex justify-content-between align-items-center">
                              <div className="text">
                                <h4>
                                  <a href="#">Kenneth Crowe</a>
                                </h4>
                                <span>53 Friends</span>
                              </div>
                              <div className="btn-box d-flex align-items-center">
                                <button
                                  className="delete-btn d-inline-block me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  type="button"
                                >
                                  <i className="ri-close-line"></i>
                                </button>

                                <button
                                  className="confirm-btn d-inline-block"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Confirm"
                                  type="button"
                                >
                                  <i className="ri-check-line"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="item d-flex align-items-center">
                            <div className="figure">
                              <a href="#">
                                <img
                                  src="assets/images/user/user-4.jpg"
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </a>
                            </div>

                            <div className="content d-flex justify-content-between align-items-center">
                              <div className="text">
                                <h4>
                                  <a href="#">Andrea Harwell</a>
                                </h4>
                                <span>99 Friends</span>
                              </div>
                              <div className="btn-box d-flex align-items-center">
                                <button
                                  className="delete-btn d-inline-block me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  type="button"
                                >
                                  <i className="ri-close-line"></i>
                                </button>

                                <button
                                  className="confirm-btn d-inline-block"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Confirm"
                                  type="button"
                                >
                                  <i className="ri-check-line"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="item d-flex align-items-center">
                            <div className="figure">
                              <a href="#">
                                <img
                                  src="assets/images/user/user-5.jpg"
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </a>
                            </div>

                            <div className="content d-flex justify-content-between align-items-center">
                              <div className="text">
                                <h4>
                                  <a href="#">John Lago</a>
                                </h4>
                                <span>18 Friends</span>
                              </div>
                              <div className="btn-box d-flex align-items-center">
                                <button
                                  className="delete-btn d-inline-block me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  type="button"
                                >
                                  <i className="ri-close-line"></i>
                                </button>

                                <button
                                  className="confirm-btn d-inline-block"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Confirm"
                                  type="button"
                                >
                                  <i className="ri-check-line"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="view-all-requests-btn">
                            <a href="friends.html" className="default-btn">
                              View All Requests
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="messages-body">
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
                              <span>Thanks For Connecting!</span>
                            </div>
                          </div>
                          <div className="item d-flex justify-content-between align-items-center">
                            <div className="figure">
                              <a href="#">
                                <img
                                  src="assets/images/user/user-14.jpg"
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
                        <div className="notifications-body">
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
                            <a
                              href="notifications.html"
                              className="default-btn"
                            >
                              View All Notifications
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-global"></i>
                        <span className="lang-name"></span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/uk.png" alt="flag" />
                          Eng
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/china.png" alt="flag" />
                          简体中文
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/uae.png" alt="flag" />
                          العربيّة
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="dropdown profile-nav-item">
                      <a
                        href="#"
                        className="dropdown-bs-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="menu-profile">
                          <img
                            src="assets/images/user/user-1.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                          <span className="name">Matthew</span>
                          <span className="status-online"></span>
                        </div>
                      </a>

                      <div className="dropdown-menu">
                        <div className="profile-header">
                          <h3>Matthew Turner</h3>
                          <a href="mailto:matthew507@gmail.com">
                            matthew507@gmail.com
                          </a>
                        </div>
                        <ul className="profile-body">
                          <li>
                            <i className="flaticon-user"></i>{" "}
                            <a href="/profile">My Profile</a>
                          </li>
                          <li>
                            <i className="flaticon-settings"></i>{" "}
                            <a href="/setting">Setting</a>
                          </li>
                          <li>
                            <i className="flaticon-privacy"></i>{" "}
                            <a href="/privacy">Privacy</a>
                          </li>
                          <li>
                            <i className="flaticon-information"></i>{" "}
                            <a href="help-and-support.html">Help & Support</a>
                          </li>
                          <li>
                            <i className="flaticon-logout"></i>{" "}
                            <a href="index.html">Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="search-box">
                      <form>
                        <input
                          type="text"
                          className="input-search"
                          placeholder="Search..."
                        />
                        <button type="submit">
                          <i className="ri-search-line"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="after-navbar-area">
          <ul className="contentbar navbar-nav m-auto text-sm-center text-md-center white">
            {topMenuItemsPublic(user).map((menu, index) => {
              return (
                <TopBarNav
                  key={index}
                  iconName={`${menu.icon}`}
                  path={menu.path}
                  title={menu.title}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
