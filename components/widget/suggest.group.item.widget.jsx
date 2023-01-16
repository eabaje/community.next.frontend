import React from "react";
import Link from "next/link";

const SuggestedItemGroupWidget = ({ groupItem }) => {
  return (
    <>
      <article className="item">
        <a href="#" className="thumb">
          <span className="fullimage bg1" role="img"></span>
        </a>

        <div className="info">
          <h4 className="title">
            <a href="#">{groupItem.GroupName}</a>
          </h4>
          <span>{groupItem.GroupMember.length}+ Members</span>
          <a href="#" className="join-btn">
            Join Community
          </a>
        </div>
      </article>
    </>
  );
};
export default SuggestedItemGroupWidget;
