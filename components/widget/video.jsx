import React from "react";

const VideoWidget = ({ userId }) => {
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
    </>
  );
};
export default VideoWidget;
