import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import "../styles/landing.page.module.css";

const NoLayout = ({ children }) => (
  <>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <div class="container">
        <a class="navbar-brand logo-image" href="index.html">
          My Area
          {/* <img src="assets2/images/logo.svg" alt="alternative" /> */}
        </a>

        <button
          class="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          {/* <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#details">
                Details <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <span class="nav-item social-icons">
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span class="fa-stack">
              <a href="#your-link">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span> */}
        </div>
      </div>
    </nav>

    <div class="header">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div class="container">
        <div class="row">{children}</div>
      </div>
      <ToastContainer position="top-center" />
    </div>

    <div class="footer bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="social-container">
              <span class="fa-stack">
                <a href="#your-link">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="#your-link">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="#your-link">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-pinterest-p fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="#your-link">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span class="fa-stack">
                <a href="#your-link">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-youtube fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NoLayout;
