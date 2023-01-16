import React from "react";

export const AddEditCloseAccount = () => {
  return (
    <>
      <form class="account-setting-form">
        <div class="title">
          <h3>Close Account</h3>
          <p>
            <span>Warning:</span> If you close your account, all your followers
            and friends will be unsubscribed and you will lose access forever.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Your Email Address</label>
              <input type="email" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Your Password</label>
              <input type="password" class="form-control" />
            </div>
          </div>

          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn">
              Delate Account
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
