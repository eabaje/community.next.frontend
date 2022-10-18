import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";

import Link from "next/link";
import $ from "jquery";

import { GlobalContext } from "../../context/Provider";

import Menu from "./vertical/navbar-vertical-menu";

import { IMG_URL } from "../../constants";
import { ROLES } from "../../constants/enum";
import * as Icons from "@material-ui/icons/";
//import Icons from "@material-ui/core/Icon";
import * as Md from "react-icons/md";
import IconMUI from "../formInput/iconMUI";

const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(typeof Icons[iconName]);
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

const NavBar = ({ key, iconName, path, title, cssStyle }) => {
  // const icon = React.createElement(FontAwesome[iconName]);
  // const icon = React.createElement(Icons[iconName]);
  //  const Icon = IconMUI(iconName);
  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <li id={key} key={key} className="sidebarListItem">
        {/* <Icon className="sidebarIcon">{iconName}</Icon> "sidebarIcon " */}

        {/*  <Icon />
         {React.createElement(Icons[`${iconName}`])} */}
        <i className={"sidebarIcon " + iconName}></i>
        <Link href={path} passHref>
          <a className="nav-link1" title={title}>
            <span className={cssStyle}>{title}</span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavBar;
