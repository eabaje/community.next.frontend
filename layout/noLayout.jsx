import React from "react";

const NoLayout = ({ children }) => (
  <div>
    <div class="auth-wrapper">
      <div class="auth-content">
        <div class="card">
          <div class="row align-items-center text-center">
            <div class="col-md-12">
              <div class=" card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NoLayout;
