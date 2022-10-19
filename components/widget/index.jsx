import React from "react";

const ContentWidget = ({ content }) => {
  return (
    <>
      <div className="widget widget-watch-video">
        <h3 className="widget-title">Watch Video</h3>

        <div className="watch-video-slides owl-carousel owl-theme">
          <div className="video-item">
            <img src="assets/images/watch-video/video-1.jpg" alt="image" />

            <a
              href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
              className="video-btn popup-youtube"
            >
              <i className="ri-play-fill"></i>
            </a>
          </div>
          <div className="video-item">
            <img src="assets/images/watch-video/video-2.jpg" alt="image" />

            <a
              href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
              className="video-btn popup-youtube"
            >
              <i className="ri-play-fill"></i>
            </a>
          </div>
          <div className="video-item">
            <img src="assets/images/watch-video/video-3.jpg" alt="image" />

            <a
              href="https://www.youtube.com/watch?v=ODfy2YIKS1M"
              className="video-btn popup-youtube"
            >
              <i className="ri-play-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="widget widget-advertisement">
        <h3 className="widget-title">Advertisement</h3>

        <div className="advertisement-image">
          <a href="#">
            <img src="assets/images/advertisement.jpg" alt="image" />
          </a>
        </div>
      </div>
      <div className="widget widget-suggested-groups">
        <h3 className="widget-title">Suggested Groups</h3>
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
      </div>
    </>
  );
};
export default ContentWidget;
