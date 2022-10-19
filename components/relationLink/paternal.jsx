import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";
import $ from "jquery";

const PaternalLink = ({ user }) => {
  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <article className="item">
        <img
          src="assets/images/user/user-17.jpg"
          className="thumb"
          alt="image"
        />
        <div className="info">
          <h4 className="title">
            <a href="#">{user?.FullName ? user?.FullName : "Eze Chinnwe"}</a>
          </h4>
          <span>1215 Members</span>
        </div>
      </article>
    </>
  );
};

export default PaternalLink;
