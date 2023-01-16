import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
//import "./navbar.scss";
import Link from "next/link";
import $ from "jquery";
import UserWidget from "../widget/user.widget";
import {
  RELATION_TYPE_2,
  RELATION_TYPE_LINK,
  RELATION_TYPE_LINK_PATERNAL,
} from "../../constants/enum";

const OtherRelationLink = ({ users, userId }) => {
  const router = useRouter();
  const selectURL = (e, userId) => {
    // window.location.href = "/home/";
    router.push(e.target.value);
  };
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
                  <h3 className="widget-title">Paternal Relations</h3>
                  <select
                    class="form-select"
                    style={{
                      width: "70px",
                      height: "30px",
                      fontSize: "10px",
                    }}
                    id={`ddlRelations`}
                    name={`ddlRelations`}
                    onChange={selectURL}
                  >
                    <option value="">Select</option>
                    <option value="">See All</option>
                    {RELATION_TYPE_LINK_PATERNAL(userId).map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                  <span className="d-flex justify-content-between align-items-center">
                    {/* <Link href={`/relation/all/?userId=${userId}&filter=all`}>
                      <a>See All</a>
                    </Link> */}
                  </span>
                </div>
                <UserWidget user={null} />
                <article className="item">
                  <a href="#" className="thumb">
                    <span className="status-online"></span>
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
                    <span className="status-offline"></span>
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
              <h3 className="widget-title">My Maternal Relations</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
              <h3 className="widget-title">My Spousal Relations</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                    <span className="status-online"></span>
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
                    <span className="status-online"></span>
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
                    <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-online"></span>
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
                  <span className="status-offline"></span>
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
                  <span className="status-online"></span>
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
