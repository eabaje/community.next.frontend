import React from "react";

function Event({ events }) {
  return (
    <>
      <div className="widget widget-explore-events">
        <h3 className="widget-title">Explore Events</h3>

        <article className="item">
          <a href="#">
            <img src="assets/images/explore-events/explore-1.jpg" alt="image" />
          </a>
        </article>
        <article className="item">
          <a href="#">
            <img src="assets/images/explore-events/explore-2.jpg" alt="image" />
          </a>
        </article>
      </div>
    </>
  );
}

export default Event;
