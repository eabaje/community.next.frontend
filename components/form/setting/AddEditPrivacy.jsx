import React from "react";

const AddeditPrivacy = () => {
  return (
    <>
      <form class="account-setting-form">
        <h3>Privacy Settings</h3>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Who Can See Your Profile?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Who Can See Your Future Post?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Who Can Send You Friend Request?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Who Can See Your Chat Activity?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Who Can See Your Phone Number?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>How People Find And Contact You?</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn">
              Save Change
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddeditPrivacy;
