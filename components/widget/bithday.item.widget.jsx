import React from "react";
import { format } from "timeago.js";
const BirthdayItemWidget = ({ user }) => {
  return (
    <>
      <article className="item">
        <a href="#" className="thumb">
          <img
            src={user?.ProfilePicture}
            className="rounded-circle"
            alt="image"
          />
          <span className="fullimage bg1" role="img"></span>
        </a>

        <div className="info">
          <h4 className="title">
            <a href="#">{user?.FullName}</a>
          </h4>
          <span>{format(user?.DOB)}</span>
        </div>
      </article>
    </>
  );
};
export default BirthdayItemWidget;
