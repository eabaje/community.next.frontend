import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";

import Link from "next/link";
import $ from "jquery";

const TopBarNav = ({ key, iconName, path, title }) => {
  // const icon = React.createElement(FontAwesome[iconName]);
  // const icon = React.createElement(Icons[iconName]);
  //  const Icon = IconMUI(iconName);
  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <li id={key} key={key} className="nav-item">
        <Link href={path} passHref>
          <a className="nav-link" title={title}>
            <span className="icon">
              <i className={iconName}></i>
            </span>{" "}
            <span className="menu-title">{title}</span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default TopBarNav;
