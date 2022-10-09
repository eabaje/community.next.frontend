import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";
import $ from "jquery";

const AdvertSlider = () => {
  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <div className="page-banner-box bg-10">
        <h3>Advert</h3>
      </div>
    </>
  );
};

export default AdvertSlider;
