import React from "react";

const AddEditMessage = () => {
  return (
    <>
      <div class="account-setting-message">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="message-content">
              <h3>Messages Setting</h3>

              <ul class="alert-box">
                <li>Send Me Messages To My Cell Phone</li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ON" />
                    <label class="form-check-label" for="ON">
                      ON
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="OFF" />
                    <label class="form-check-label" for="OFF">
                      OFF
                    </label>
                  </div>
                </li>
              </ul>

              <ul class="alert-box">
                <li>General Announcement, Updates, Posts, And Videos</li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ON-2" />
                    <label class="form-check-label" for="ON-2">
                      ON
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="OFF-2"
                    />
                    <label class="form-check-label" for="OFF-2">
                      OFF
                    </label>
                  </div>
                </li>
              </ul>

              <ul class="alert-box">
                <li>Messages From Activity On My Page</li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ON-3" />
                    <label class="form-check-label" for="ON-3">
                      ON
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="OFF-3"
                    />
                    <label class="form-check-label" for="OFF-3">
                      OFF
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="message-content">
              <ul class="alert-box">
                <li>Page Follow Notification</li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ON-4" />
                    <label class="form-check-label" for="ON-4">
                      ON
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="OFF-4"
                    />
                    <label class="form-check-label" for="OFF-4">
                      OFF
                    </label>
                  </div>
                </li>
              </ul>
              <ul class="alert-box">
                <li>Breaking News</li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="ON-5" />
                    <label class="form-check-label" for="ON-5">
                      ON
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="OFF-5"
                    />
                    <label class="form-check-label" for="OFF-5">
                      OFF
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditMessage;
