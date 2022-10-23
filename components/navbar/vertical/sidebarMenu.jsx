import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";

import Link from "next/link";
import $ from "jquery";

import { GlobalContext } from "../../../context/Provider";

import Menu from "./navbar-vertical-menu";

import { IMG_URL } from "../../../constants";
import { ROLES } from "../../../constants/enum";
import * as Icons from "@material-ui/icons/";

const SideBarMenu = ({ path, title, icon }) => {
  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <li class="nav-item">
        <Link href={path} passHref>
          <a className="nav-link" title={title}>
            <span class="icon">
              <i class={icon}></i>
            </span>
            <span class="menu-title">{title}</span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default SideBarMenu;
