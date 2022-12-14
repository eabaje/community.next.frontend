import React from "react";
import Link from "next/link";

const SuggestedGroupWidget = ({ userId, title, showButton }) => {
  return (
    <>
      <div className="widget widget-suggested-groups">
        <h3 className="widget-title">{title}</h3>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage bg1" role="img"></span>
          </a>

          <div className="info">
            <h4 className="title">
              <a href="#">UX/UI Design Group</a>
            </h4>
            <span>5000+ Members</span>
            <a href="#" className="join-btn">
              Join Community
            </a>
          </div>
        </article>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage bg2" role="img"></span>
          </a>

          <div className="info">
            <h4 className="title">
              <a href="#">Job Search Group</a>
            </h4>
            <span>5000+ Members</span>
            <a href="#" className="join-btn">
              Join Community
            </a>
          </div>
        </article>
        <article className="item">
          <a href="#" className="thumb">
            <span className="fullimage bg3" role="img"></span>
          </a>

          <div className="info">
            <h4 className="title">
              <a href="#">Photography Group</a>
            </h4>
            <span>5000+ Members</span>
            <a href="#" className="join-btn">
              Join Community
            </a>
          </div>
        </article>
        <br />
        {showButton === true && (
          <div class="events-btn">
            <Link href={`/group/?userid=${userId}`}>
              <a class="default-btn">Add New Group</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default SuggestedGroupWidget;
