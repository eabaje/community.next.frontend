import "../../styles/sidebar.module.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  People,
  Person,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import {
  AccessAlarm,
  Man,
  Woman,
  HolidayVillage,
  Timeline,
  ThreeDRotation,
} from "@mui/icons-material";

import dynamic from "next/dynamic";

import $ from "jquery";
//import "./loader.js";
//import "./metismenu.min";
import { useContext, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { menuItemsPublic } from "../navbar/vertical/sidebarData";
import SideBarMenu from "../navbar/vertical/sidebarMenu";
import Sidebar from "./Sidebar";
import PaternalLink from "../relationLink/paternal";
import { useRouter } from "next/router";
import SuggestedGroupWidget from "../widget/suggestedGroup";
import VideoWidget from "../widget/video";
import AdvertWidget from "../widget/advert.widget";
import ProfileWidget from "../widget/profile";

function LeftBar({ user }) {
  const router = useRouter();
  useEffect(() => {
    //let controller = new AbortController();
    if (typeof window !== "undefined") {
      // $("#sidemenu-nav").metisMenu();
    }
  }, []);
  console.log("router.pathname", user);
  return (
    <>
      <div className="leftBar">
        <div className="col-lg-12 col-md-12">
          <aside className="widget-area">
            {router.pathname === "/home" && <ProfileWidget user={user} />}
            <Sidebar user={user} />

            <div className="leftBarDown">
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"My Groups"}
                showButton={true}
              />
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"Suggested Groups"}
                showButton={false}
              />
              <SuggestedGroupWidget
                userId={user?.UserId}
                title={"Pages you like"}
                showButton={false}
              />
              <VideoWidget userId={user?.UserId} />
              <AdvertWidget userId={user?.UserId} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(LeftBar), { ssr: false });
