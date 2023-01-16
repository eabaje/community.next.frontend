import React from "react";

const AddEditNotification = () => {
  return (
    <>
      <div class="account-setting-notification">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="notification-content">
              <h3>Notification</h3>

              <ul class="alert-box">
                <li>Where You Receive Comment Notification?</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="email"
                    />
                    <label class="form-check-label" for="email">
                      Email
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="SMS" />
                    <label class="form-check-label" for="SMS">
                      SMS
                    </label>
                  </div>
                </li>
              </ul>
              <ul class="alert-box">
                <li>Get Notifications When You're Tagged By</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="anyone"
                    />
                    <label class="form-check-label" for="anyone">
                      Anyone
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="friends"
                    />
                    <label class="form-check-label" for="friends">
                      Friends
                    </label>
                  </div>
                </li>
              </ul>
              <ul class="alert-box">
                <li>Get Notifications When Updates From Friends</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="email-2"
                    />
                    <label class="form-check-label" for="email-2">
                      Email
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="SMS-2"
                    />
                    <label class="form-check-label" for="SMS-2">
                      SMS
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="other-notification-content">
              <h3>Other Notifications</h3>

              <ul class="alert-box">
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="recommended-videos"
                    />
                    <label class="form-check-label" for="recommended-videos">
                      Recommended Videos
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="games"
                    />
                    <label class="form-check-label" for="games">
                      Games
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="breaking-news"
                    />
                    <label class="form-check-label" for="breaking-news">
                      Breaking News
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="pages-follow-notification"
                    />
                    <label
                      class="form-check-label"
                      for="pages-follow-notification"
                    >
                      Pages Follow Notification
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="notification-content">
              <ul class="alert-box">
                <li>Where You Receive Friend Request Notification?</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="email-3"
                    />
                    <label class="form-check-label" for="email-3">
                      Email
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="SMS-3"
                    />
                    <label class="form-check-label" for="SMS-3">
                      SMS
                    </label>
                  </div>
                </li>
              </ul>

              <ul class="alert-box">
                <li>Where You Receive Birthday Notification?</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="email-4"
                    />
                    <label class="form-check-label" for="email-4">
                      Email
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="SMS-4"
                    />
                    <label class="form-check-label" for="SMS-4">
                      SMS
                    </label>
                  </div>
                </li>
              </ul>

              <ul class="alert-box">
                <li>Where You Receive Groups Notification?</li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="email-5"
                    />
                    <label class="form-check-label" for="email-5">
                      Email
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="SMS-5"
                    />
                    <label class="form-check-label" for="SMS-5">
                      SMS
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

export default AddEditNotification;
