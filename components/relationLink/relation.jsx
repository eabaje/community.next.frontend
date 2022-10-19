import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";
import Link from "next/link";
import $ from "jquery";

const OtherRelationLink = ({ user }) => {
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
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area">
            <div className="moreSpace">
              <div className="widget widget-page-you-like">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="widget-title">My Paternal Links</h3>
                  <span className="d-flex justify-content-between align-items-center">
                    <a href="#">See All</a>
                  </span>
                </div>

                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg1" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Chief Eze Nwannu</a>
                    </h4>
                    <span>1215 Members</span>
                  </div>
                </article>
                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg2" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Digital Marketing</a>
                    </h4>
                    <span>1865 Members</span>
                  </div>
                </article>
                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg3" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Fitness Club</a>
                    </h4>
                    <span>2051 Members</span>
                  </div>
                </article>
              </div>
            </div>
          </aside>
        </div>
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Maternal Links</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Spousal Links</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area">
            <div className="moreSpace">
              <div className="widget widget-page-you-like">
                <h3 className="widget-title">My Classmates</h3>

                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg1" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Chief Eze Nwannu</a>
                    </h4>
                    <span>1215 Members</span>
                  </div>
                </article>
                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg2" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Digital Marketing</a>
                    </h4>
                    <span>1865 Members</span>
                  </div>
                </article>
                <article className="item">
                  <a href="#" className="thumb">
                    <span className="fullimage bg3" role="img"></span>
                  </a>

                  <div className="info">
                    <h4 className="title">
                      <a href="#">Fitness Club</a>
                    </h4>
                    <span>2051 Members</span>
                  </div>
                </article>
              </div>
            </div>
          </aside>
        </div>
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Neighbours</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div className="col-lg-4 col-sm-6">
          <aside className="widget-area ">
            <div className="widget widget-page-you-like moreSpace">
              <h3 className="widget-title">My Colleagues</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default OtherRelationLink;
