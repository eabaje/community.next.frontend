import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";

import Link from "next/link";
import $ from "jquery";

import { GlobalContext } from "../../context/Provider";

import Menu from "./vertical/navbar-vertical-menu";

import { IMG_URL } from "../../constants";
import { ROLES } from "../../constants/enum";
import * as Icons from "@material-ui/icons/";

const SideBarMenu = ({ path, title, cssStyle }) => {
  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <Link href={path} passHref>
        <a className="nav-link1" title={title}>
          <span className={cssStyle}>{title}</span>
        </a>
      </Link>
    </>
  );
};

export default SideBarMenu;
