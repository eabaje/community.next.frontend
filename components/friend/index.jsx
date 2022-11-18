import "../../styles/sidebar.module.css";
import { useContext, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import $ from "jquery";

function Friend({ friend }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="option-item">
        <div className="dropdown friend-requests-nav-item">
          <a
            href="#"
            className="dropdown-bs-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="friend-requests-btn">
              <i className="flaticon-user"></i>
              <span>3</span>
            </div>
          </a>

          <div className="dropdown-menu">
            <div className="friend-requests-header d-flex justify-content-between align-items-center">
              <h3>Friend Requests</h3>
              <i className="flaticon-menu"></i>
            </div>

            <div className="friend-requests-body" data-simplebar>
              {friend?.data.map((friendItem, index) => (
                <div className="item d-flex align-items-center">
                  <div className="figure">
                    <a href="#">
                      <img
                        src={
                          friendItem?.user?.ProfilePicture
                            ? msgItem?.user?.ProfilePicture
                            : "assets/images/user/user-11.jpg"
                        }
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div className="content d-flex justify-content-between align-items-center">
                    <div className="text">
                      <h4>
                        <a href="#">{friendItem?.user?.FullName}</a>
                      </h4>
                      <span>
                        {
                          friend?.filter(
                            (item) =>
                              item?.TargetId === friendItem?.UserId &&
                              item?.Type === "friend"
                          ).length
                        }{" "}
                        Friends
                      </span>
                    </div>
                    <div className="btn-box d-flex align-items-center">
                      <button
                        className="delete-btn d-inline-block me-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                        type="button"
                      >
                        <i className="ri-close-line"></i>
                      </button>

                      <button
                        className="confirm-btn d-inline-block"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Confirm"
                        type="button"
                      >
                        <i className="ri-check-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="view-all-requests-btn">
                <Link href={"/friend"} passHref>
                  <a className="default-btn">View All Requests</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//export default Sidebar;
export default dynamic(() => Promise.resolve(Friend), { ssr: false });
