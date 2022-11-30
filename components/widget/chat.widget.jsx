import React from "react";

const ChatWidget = ({ user, className }) => {
  return (
    <>
      <div className={className ? className : "contact-item "}>
        <a href="#">
          <img
            src={user?.ProfilePicture}
            className="rounded-circle"
            alt="image"
          />
        </a>
        <span className="name">
          <a href="#">{user?.FullName}</a>
        </span>
        {user?.Status === "online" ? (
          <span className="status-online"></span>
        ) : (
          <span className="status-offline"></span>
        )}
      </div>
    </>
  );
};
export default ChatWidget;
