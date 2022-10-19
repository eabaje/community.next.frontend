//import "../../styles/rightbar.css";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser?.followings?.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user?._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user?._id });
      } else {
        await axios.put(`/users/${user?._id}/follow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: "FOLLOW", payload: user?._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              key={friend.id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      {/* <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div> */}

      <div className="right-sidebar-area" data-simplebar>
        <div className="recent-chat-box">
          <div className="title">
            <h3>Recent Chat</h3>
          </div>

          <div className="chat-body" data-simplebar>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-15.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Stephan Redding</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-16.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Maria Smith</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-17.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Paul Enlow</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-8.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Stephan Redding</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-9.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Maria Smith</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="chat-item">
              <a href="#">
                <img
                  src="assets/images/user/user-10.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Paul Enlow</a>
              </span>
              <span className="status-offline"></span>
            </div>
          </div>
        </div>

        <div className="recent-contact-box">
          <div className="title">
            <h3>Contact</h3>
          </div>
          <div className="contact-search-box">
            <form>
              <input
                type="text"
                className="input-search"
                placeholder="Search"
              />
              <button type="submit">
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
          <div className="contact-body" data-simplebar>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-18.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Karen Williams</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-4.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Mary A. Schwarz</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-20.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Rex Carruth</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-11.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">James Vanwinkle</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-19.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Oscar Thompson</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-12.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Harry Lopez</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-21.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Frank S. Arena</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-16.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Karen Williams</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-2.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Mary A. Schwarz</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-14.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Rex Carruth</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-18.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">James Vanwinkle</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-5.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Oscar Thompson</a>
              </span>
              <span className="status-offline"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-6.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Harry Lopez</a>
              </span>
              <span className="status-online"></span>
            </div>
            <div className="contact-item">
              <a href="#">
                <img
                  src="assets/images/user/user-7.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </a>
              <span className="name">
                <a href="#">Frank S. Arena</a>
              </span>
              <span className="status-offline"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
