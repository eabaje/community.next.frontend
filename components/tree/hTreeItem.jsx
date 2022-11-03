import React from "react";

const StyledTreeItem = ({ user, relation }) => {
  return (
    <div className="chat-item">
      <a href="#">
        <img
          src={user?.img ? user?.img : "assets/images/user/user-15.jpg"}
          className="rounded-circle"
          alt="image"
        />
      </a>
      <span className="name">
        <a href="#">{user?.FullName ? user?.FullName : "Pa Chimeze"}</a>
      </span>
      <br />
      <span className="name">{relation}</span>

      <span className="status-online"></span>
    </div>
  );
};
export default StyledTreeItem;
