import React from "react";
import Header from "../components/topbar/Topbar";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { signout } from "../context/actions/auth/auth.action";
import $ from "jquery";
import ContentLink from "../components/content/contentBar/Link";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/footer";
import dynamic from "next/dynamic";
import LeftBar from "../components/sidebar/LeftBar";
//import "./jquery-ui.min.js";
const MainLayout = ({ children }) => {
  const {
    authState: { user, isLoggedIn },
  } = useContext(GlobalContext);

  const getUser = async () => {
    try {
      // setUser(JSON.parse(localStorage.getItem("user")));
      if (!user) {
        window.location = "/";
      }
    } catch (error) {}
  };
  const a = 1;

  React.useEffect(() => {
    // let controller = new AbortController();

    getUser();
    // return () => controller?.abort();
    if (typeof window !== "undefined") {
      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    }
  }, [a]);
  // console.log(`User`, user);

  return (
    <>
      {/* <!-- Start Preloader Area -->  
        <div className="preloader-area">
          <div className="spinner">
            <div className="inner">
              <div className="disc"></div>
              <div className="disc"></div>
              <div className="disc"></div>
            </div>
          </div>
        </div>*/}
      {/* <!-- End Preloader Area --> */}

      <div className="main-content-wrapper d-flex flex-column">
        <Header user={user} />
        {/* <ContentLink /> */}
        <LeftBar user={user} />

        <div className="content-page-box-area">
          <ToastContainer position="top-center" />
          <div className="container">{children}</div>
        </div>
        <Rightbar user={user} />
      </div>

      <Footer />
    </>
  );
};

//export default MainLayout;

export default dynamic(() => Promise.resolve(MainLayout), { ssr: false });
