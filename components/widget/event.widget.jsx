import React from "react";

const EventWidget = ({ event }) => {
  return (
    <>
     <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-1.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>12:30PM to 02:30PM</span>
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>Online</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>July 30, 2021</span>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};
export default EventWidget;
