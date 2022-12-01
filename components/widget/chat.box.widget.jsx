import React from "react";

const ChatItemWidget = ({ user }) => {
  return (
    <>
      <div class="chat-box">
            <div class="image">
              <a href="#">
                <img
                  src={user?.ProfilePicture}
                  class="rounded-circle"
                  alt="image"
                />
              </a>
              {user?.Status === "online" ? (
          <span className="status-online"></span>
        ) : (
          <span className="status-offline"></span>
        )}
             
            </div>
            <h3>
              <a href="#">{user?.FullName}</a>
            </h3>
          </div>
    </>
  );
};
export default ChatItemWidget;
