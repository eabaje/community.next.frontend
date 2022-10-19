import React from "react";

const AuthLayout = ({ children }) => (
  <div className="profile-authentication-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="profile-authentication-image">
            <div className="content-image">
              <div className="logo">
                <a href="#">
                  <img src="assets/images/logo.png" alt="MyArea" />
                </a>
              </div>
              <div className="vector-image">
                <img src="assets/images/vector.png" alt="image" />
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>

    <div className="home-btn-icon">
      <a href="index.html">
        <i className="flaticon-home"></i>
      </a>
    </div>
  </div>
);

export default AuthLayout;
