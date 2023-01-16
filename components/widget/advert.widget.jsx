import React from "react";

const AdvertWidget = ({ advert }) => {
  return (
    <>
      <div className="widget widget-advertisement">
        <h3 className="widget-title">Advertisement</h3>

        <div className="advertisement-image">
          <a href="#">
            <img
              src={
                advert?.AdvertImgUrl
                  ? advert?.AdvertImgUrl
                  : "assets/images/advertisement.jpg"
              }
              alt="image"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default AdvertWidget;
