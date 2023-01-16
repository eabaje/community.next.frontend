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
import { selectProps } from "../../helpers/selectProps";
import moment from "moment";

const OtherRelationLink = ({ relation, school, place, work, userId }) => {
  const router = useRouter();
  const selectURL = (e, userId) => {
    // window.location.href = "/home/";
    router.push(e.target.value);
  };
  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");
  const schoolNameArray = school?.map(selectProps("SchoolName"));

  const schoolStateArray = school?.map(selectProps("State"));
  const schoolDateArray = school?.map(selectProps("YearFrom", "YearTo"));

  const placeArray = place?.map(selectProps("NeighborhoodName"));
  const placeCityArray = place?.map(selectProps("City"));
  const placeHomeTownArray = place?.map(selectProps("HomeTown"));
  const placeAddressArray = place?.map(selectProps("Address"));
  const placeStateArray = place?.map(selectProps("State"));
  const placeDateArray = place?.map(selectProps("YearFrom", "YearTo"));

  const workNameArray = work.map(selectProps("CompanyName"));
  const workCityArray = place?.map(selectProps("City"));
  const workStateArray = place?.map(selectProps("State"));
  const workDateArray = work?.map(selectProps("YearFrom", "YearTo"));

  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);
  console.log("schoolNameArray", schoolNameArray);
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
                <UserWidget
                  user={relation?.data.filter(
                    (e) => e.Level !== 0 && e.RelationCategory === "paternal"
                  )}
                />
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
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="widget-title">Maternal Relations</h3>
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
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="widget-title">Spousal Relations</h3>
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
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="widget-title">Classmates</h3>
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
                    <option value={`/classmate/?userId=${userId}`}>
                      See All
                    </option>
                    <optgroup label="School Name:">
                      {schoolNameArray.length > 0 ? (
                        schoolNameArray?.map((item, i) => (
                          <option
                            key={item.i}
                            value={`/classmate/?userId=${userId}&schoolName=${item.SchoolName}`}
                          >
                            {item.SchoolName}
                          </option>
                        ))
                      ) : (
                        <option value={`/profile/?userId=${userId}`}>
                          {"Create New School Record"}
                        </option>
                      )}
                    </optgroup>
                    {/*   <optgroup label="State:">
                      {schoolStateArray?.map((item, i) => (
                        <option
                          key={item.i}
                          value={`/classmate/?userId=${userId}&state=${item.State}`}
                        >
                          {item.State}
                        </option>
                      ))}
                    </optgroup>
                     <optgroup label="Year:">
                      {schoolDateArray?.map((item, i) => (
                        <option
                          key={item.i}
                          value={`/classmate/?userId=${userId}&dateFrom=${moment(
                            item.YearFrom
                          ).format("YYYY")}&dateTo=${moment(item.YearTo).format(
                            "YYYY"
                          )}`}
                        >
                          {moment(item.YearFrom).format("YYYY")}-{" "}
                          {moment(item.YearTo).format("YYYY")}
                        </option>
                      ))}
                    </optgroup> */}
                  </select>
                  <span className="d-flex justify-content-between align-items-center">
                    {/* <Link href={`/relation/all/?userId=${userId}&filter=all`}>
                      <a>See All</a>
                    </Link> */}
                  </span>
                </div>

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
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="widget-title">Neighbours</h3>
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
                  <optgroup label="Neighbourhood:">
                    {placeArray.length > 0 ? (
                      placeArray?.map((item, i) => (
                        <option
                          key={item.i}
                          value={`/neigbour/?userId=${userId}&pl=${item.NeighborhoodName}`}
                        >
                          {item.NeighborhoodName}
                        </option>
                      ))
                    ) : (
                      <option value={`/neighbour/?userId=${userId}`}>
                        {"Create New Neighbourhood Record"}
                      </option>
                    )}
                  </optgroup>
                  {/* <optgroup label="Address:">
                    {placeAddressArray?.map((item, i) => (
                      <option
                        key={item.i}
                        value={`/neigbour/?userId=${userId}&address=${item.Address}`}
                      >
                        {item.Address}
                      </option>
                    ))}
                  </optgroup> */}
                  <optgroup label="City:">
                    {placeCityArray.length > 0 ? (
                      placeCityArray?.map((item, i) => (
                        <option
                          key={item.i}
                          value={`/neigbour/?userId=${userId}&city=${item.City}`}
                        >
                          {item.City}
                        </option>
                      ))
                    ) : (
                      <option value={`/neighbour/?userId=${userId}`}>
                        {"Create New Neighbourhood Record"}
                      </option>
                    )}
                  </optgroup>
                  {/*  <optgroup label="State:">
                    {placeCityArray?.map((item, i) => (
                      <option
                        key={item.i}
                        value={`/neigbour/?userId=${userId}&state=${item.State}`}
                      >
                        {item.State}
                      </option>
                    ))}
                  </optgroup>
                   <optgroup label="Year:">
                    {placeDateArray?.map((item, i) => (
                      <option
                        key={item.i}
                        value={`/neigbour/?userId=${userId}&dateFrom=${moment(
                          item.YearFrom
                        ).format("YYYY")}&dateTo=${moment(item.YearTo).format(
                          "YYYY"
                        )}`}
                      >
                        {moment(item.YearFrom).format("YYYY")}-{" "}
                        {moment(item.YearTo).format("YYYY")}
                      </option>
                    ))}
                  </optgroup> */}
                </select>
                <span className="d-flex justify-content-between align-items-center">
                  {/* <Link href={`/relation/all/?userId=${userId}&filter=all`}>
                      <a>See All</a>
                    </Link> */}
                </span>
              </div>

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
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="widget-title">Colleagues</h3>
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
                  <optgroup label="Company Name:">
                    {workNameArray.length > 0 ? (
                      workNameArray?.map((item, i) => (
                        <option
                          key={item.i}
                          value={`/colleague/?userId=${userId}&companyName=${item.CompanyName}`}
                        >
                          {item.CompanyName}
                        </option>
                      ))
                    ) : (
                      <option value={`/colleague/?userId=${userId}`}>
                        {"Create New Work Record"}
                      </option>
                    )}
                  </optgroup>
                  {/* <optgroup label="State:">
                    {workStateArray?.map((item, i) => (
                      <option
                        key={item.i}
                        value={`/colleague/?userId=${userId}&state=${item.State}`}
                      >
                        {item.State}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Year:">
                    {workDateArray?.map((item, i) => (
                      <option
                        key={item.i}
                        value={`/colleague/?userId=${userId}&dateFrom=${moment(
                          item.YearFrom
                        ).format("YYYY")}&dateTo=${moment(item.YearTo).format(
                          "YYYY"
                        )}`}
                      >
                        {moment(item.YearFrom).format("YYYY")}-{" "}
                        {moment(item.YearTo).format("YYYY")}
                      </option>
                    ))}
                  </optgroup> */}
                </select>
                <span className="d-flex justify-content-between align-items-center">
                  {/* <Link href={`/relation/all/?userId=${userId}&filter=all`}>
                      <a>See All</a>
                    </Link> */}
                </span>
              </div>

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
