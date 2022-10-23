import React from "react";
import AdvertSlider from "../../advert/slider";
import PaternalLink from "../../relationLink/paternal";
import OtherRelationLink from "../../relationLink/relation";
import Sidebar from "../../sidebar/Sidebar";

function FirstMiddleContent() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <AdvertSlider />
          </div>
          <OtherRelationLink />
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="news-feed-area">
                <div className="news-feed news-feed-form">
                  <h3 className="news-feed-title">Create New Post</h3>

                  <form>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Write something here..."
                      ></textarea>
                    </div>
                    <ul className="button-group d-flex justify-content-between align-items-center">
                      <li className="photo-btn">
                        <button type="submit">
                          <i className="flaticon-gallery"></i> Photo
                        </button>
                      </li>
                      <li className="video-btn">
                        <button type="submit">
                          <i className="flaticon-video"></i> Video
                        </button>
                      </li>
                      <li className="tag-btn">
                        <button type="submit">
                          <i className="flaticon-tag"></i> Tag Friends
                        </button>
                      </li>
                      <li className="post-btn">
                        <button type="submit">Post</button>
                      </li>
                    </ul>
                  </form>
                </div>

                <div className="news-feed news-feed-stories">
                  <div className="stories-title d-flex justify-content-between align-items-center">
                    <h3>Stories</h3>
                    <span>
                      <a href="#">See All</a>
                    </span>
                  </div>

                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <div className="stories-image">
                          <a href="#">
                            <img
                              src="assets/images/user/user-1.jpg"
                              alt="image"
                            />
                          </a>
                          <div className="add-icon">
                            <a href="#">
                              <i className="flaticon-add"></i>
                            </a>
                          </div>
                        </div>
                        <span>
                          <a href="#">Add Story</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <a href="#">
                          <img
                            src="assets/images/user/user-28.jpg"
                            alt="image"
                          />
                        </a>
                        <span>
                          <a href="#">Jimenez</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <a href="#">
                          <img
                            src="assets/images/user/user-29.jpg"
                            alt="image"
                          />
                        </a>
                        <span>
                          <a href="#">Lolita</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <a href="#">
                          <img
                            src="assets/images/user/user-13.jpg"
                            alt="image"
                          />
                        </a>
                        <span>
                          <a href="#">Matthew</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <a href="#">
                          <img
                            src="assets/images/user/user-30.jpg"
                            alt="image"
                          />
                        </a>
                        <span>
                          <a href="#">Russell</a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="stories-item">
                        <a href="#">
                          <img
                            src="assets/images/user/user-31.jpg"
                            alt="image"
                          />
                        </a>
                        <span>
                          <a href="#">Katzman</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="news-feed news-feed-post">
                  <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="image">
                      <a href="my-profile.html">
                        <img
                          src="assets/images/user/user-32.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="info ms-3">
                      <span className="name">
                        <a href="my-profile.html">Julie R. Morleyv</a>
                      </span>
                      <span className="small-text">
                        <a href="#">10 Mins Ago</a>
                      </span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-menu"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-edit"></i> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-private"></i> Hide Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-trash"></i> Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-body">
                    <p>
                      Donec rutrum congue leo eget malesuada. Nulla quis lorem
                      ut libero malesuada feugiat. Donec rutrum congue leo eget
                      malesuada. Donec rutrum congue leo eget malesuada.
                      Praesent sapien massa convallis a pellentesque nec egestas
                      non nisi. Curabitur non nulla sit amet nisl tempus
                      convallis quis.
                    </p>
                    <div className="post-image">
                      <img
                        src="assets/images/news-feed-post/post-1.jpg"
                        alt="image"
                      />
                    </div>
                    <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                      <li className="post-react">
                        <a href="#">
                          <i className="flaticon-like"></i>
                          <span>Like</span>{" "}
                          <span className="number">1499 </span>
                        </a>

                        <ul className="react-list">
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-1.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-2.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-3.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-4.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-5.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-6.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-7.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="post-comment">
                        <a href="#">
                          <i className="flaticon-comment"></i>
                          <span>Comment</span>{" "}
                          <span className="number">599 </span>
                        </a>
                      </li>
                      <li className="post-share">
                        <a href="#">
                          <i className="flaticon-share"></i>
                          <span>Share</span> <span className="number">24 </span>
                        </a>
                      </li>
                    </ul>
                    <div className="post-comment-list">
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-33.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">David Moore</a>
                          </h3>
                          <span>5 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada nulla quis
                            lorem ut libero malesuada feugiat donec rutrum
                            congue leo eget malesuada donec rutrum congue leo
                            eget malesuada. Praesent sapien massa convallis a
                            pellentesque non nisi curabitur non nulla sit amet
                            nisl tempus convallis lectus.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(2)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-34.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">Claire P. Toy</a>
                          </h3>
                          <span>45 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada praesent
                            sapien massa convallis a pellentesque nec egestas
                            non nisi curabitur non nulla sit amet nisl tempus
                            convallis quis ac lectus.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(12)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-8.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">Karen Williams</a>
                          </h3>
                          <span>5 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada nulla quis
                            lorem ut libero malesuada feugiat donec rutrum
                            congue leo eget.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(2)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="more-comments">
                        <a href="#">More Comments+</a>
                      </div>
                    </div>
                    <form className="post-footer">
                      <div className="footer-image">
                        <a href="#">
                          <img
                            src="assets/images/user/user-1.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Write a comment..."
                        ></textarea>
                        <label>
                          <a href="#">
                            <i className="flaticon-photo-camera"></i>
                          </a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="news-feed news-feed-post">
                  <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="image">
                      <a href="my-profile.html">
                        <img
                          src="assets/images/user/user-35.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="info ms-3">
                      <span className="name">
                        <a href="my-profile.html">William Fenton</a>
                      </span>
                      <span className="small-text">
                        <a href="#">50 Mins Ago</a>
                      </span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-menu"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-edit"></i> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-private"></i> Hide Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-trash"></i> Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-body">
                    <p>💗</p>
                    <div className="post-image">
                      <img
                        src="assets/images/news-feed-post/post-2.jpg"
                        alt="image"
                      />
                    </div>
                    <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                      <li className="post-react">
                        <a href="#">
                          <i className="flaticon-like"></i>
                          <span>Like</span> <span className="number">3 </span>
                        </a>

                        <ul className="react-list">
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-1.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-2.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-3.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-4.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-5.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-6.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-7.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="post-comment">
                        <a href="#">
                          <i className="flaticon-comment"></i>
                          <span>Comment</span>{" "}
                          <span className="number">0 </span>
                        </a>
                      </li>
                      <li className="post-share">
                        <a href="#">
                          <i className="flaticon-share"></i>
                          <span>Share</span> <span className="number">0 </span>
                        </a>
                      </li>
                    </ul>
                    <form className="post-footer">
                      <div className="footer-image">
                        <a href="#">
                          <img
                            src="assets/images/user/user-2.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Write a comment..."
                        ></textarea>
                        <label>
                          <a href="#">
                            <i className="flaticon-photo-camera"></i>
                          </a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="news-feed news-feed-post">
                  <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="image">
                      <a href="my-profile.html">
                        <img
                          src="assets/images/user/user-36.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="info ms-3">
                      <span className="name">
                        <a href="my-profile.html">Maria Dodson</a>
                      </span>
                      <span className="small-text">
                        <a href="#">2 Hours Ago</a>
                      </span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-menu"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-edit"></i> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-private"></i> Hide Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-trash"></i> Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-body">
                    <p>Keep Smiling 🧡</p>
                    <div className="post-image">
                      <img
                        src="assets/images/news-feed-post/post-3.jpg"
                        alt="image"
                      />
                    </div>
                    <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                      <li className="post-react">
                        <a href="#">
                          <i className="flaticon-like"></i>
                          <span>Like</span> <span className="number">15 </span>
                        </a>

                        <ul className="react-list">
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-1.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-2.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-3.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-4.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-5.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-6.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-7.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="post-comment">
                        <a href="#">
                          <i className="flaticon-comment"></i>
                          <span>Comment</span>{" "}
                          <span className="number">0 </span>
                        </a>
                      </li>
                      <li className="post-share">
                        <a href="#">
                          <i className="flaticon-share"></i>
                          <span>Share</span> <span className="number">5 </span>
                        </a>
                      </li>
                    </ul>
                    <form className="post-footer">
                      <div className="footer-image">
                        <a href="#">
                          <img
                            src="assets/images/user/user-15.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Write a comment..."
                        ></textarea>
                        <label>
                          <a href="#">
                            <i className="flaticon-photo-camera"></i>
                          </a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="news-feed news-feed-post">
                  <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="image">
                      <a href="my-profile.html">
                        <img
                          src="assets/images/user/user-5.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="info ms-3">
                      <span className="name">
                        <a href="my-profile.html">Karen Williams</a>
                      </span>
                      <span className="small-text">
                        <a href="#">10 Mins Ago</a>
                      </span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-menu"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-edit"></i> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-private"></i> Hide Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-trash"></i> Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-body">
                    <p>
                      Donec rutrum congue leo eget malesuada. Nulla quis lorem
                      ut libero malesuada feugiat. Donec rutrum congue leo eget
                      malesuada.
                    </p>
                    <div className="post-image">
                      <img
                        src="assets/images/news-feed-post/post-4.jpg"
                        alt="image"
                      />
                    </div>
                    <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                      <li className="post-react">
                        <a href="#">
                          <i className="flaticon-like"></i>
                          <span>Like</span>{" "}
                          <span className="number">1499 </span>
                        </a>

                        <ul className="react-list">
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-1.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-2.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-3.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-4.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-5.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-6.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-7.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="post-comment">
                        <a href="#">
                          <i className="flaticon-comment"></i>
                          <span>Comment</span>{" "}
                          <span className="number">599 </span>
                        </a>
                      </li>
                      <li className="post-share">
                        <a href="#">
                          <i className="flaticon-share"></i>
                          <span>Share</span> <span className="number">24 </span>
                        </a>
                      </li>
                    </ul>
                    <div className="post-comment-list">
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-14.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">David Moore</a>
                          </h3>
                          <span>5 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada nulla quis
                            lorem ut libero malesuada feugiat donec rutrum
                            congue leo eget malesuada donec rutrum congue leo
                            eget malesuada. Praesent sapien massa convallis a
                            pellentesque non nisi curabitur non nulla sit amet
                            nisl tempus convallis lectus.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(2)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-15.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">Claire P. Toy</a>
                          </h3>
                          <span>45 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada praesent
                            sapien massa convallis a pellentesque nec egestas
                            non nisi curabitur non nulla sit amet nisl tempus
                            convallis quis ac lectus.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(12)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="comment-list">
                        <div className="comment-image">
                          <a href="my-profile.html">
                            <img
                              src="assets/images/user/user-16.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="comment-info">
                          <h3>
                            <a href="my-profile.html">Karen Williams</a>
                          </h3>
                          <span>5 Mins Ago</span>
                          <p>
                            Donec rutrum congue leo eget malesuada nulla quis
                            lorem ut libero malesuada feugiat donec rutrum
                            congue leo eget.
                          </p>
                          <ul className="comment-react">
                            <li>
                              <a href="#" className="like">
                                Like(2)
                              </a>
                            </li>
                            <li>
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="more-comments">
                        <a href="#">More Comments+</a>
                      </div>
                    </div>
                    <form className="post-footer">
                      <div className="footer-image">
                        <a href="#">
                          <img
                            src="assets/images/user/user-19.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Write a comment..."
                        ></textarea>
                        <label>
                          <a href="#">
                            <i className="flaticon-photo-camera"></i>
                          </a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="news-feed news-feed-post">
                  <div className="post-header d-flex justify-content-between align-items-center">
                    <div className="image">
                      <a href="my-profile.html">
                        <img
                          src="assets/images/user/user-18.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="info ms-3">
                      <span className="name">
                        <a href="my-profile.html">Maria Dodson</a>
                      </span>
                      <span className="small-text">
                        <a href="#">2 Hours Ago</a>
                      </span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="flaticon-menu"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-edit"></i> Edit Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-private"></i> Hide Post
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i className="flaticon-trash"></i> Delete Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="post-image">
                      <img
                        src="assets/images/news-feed-post/post-5.jpg"
                        alt="image"
                      />
                    </div>
                    <ul className="post-meta-wrap d-flex justify-content-between align-items-center">
                      <li className="post-react">
                        <a href="#">
                          <i className="flaticon-like"></i>
                          <span>Like</span> <span className="number">15 </span>
                        </a>

                        <ul className="react-list">
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-1.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-2.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-3.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-4.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-5.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-6.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src="assets/images/react/react-7.png"
                                alt="Like"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="post-comment">
                        <a href="#">
                          <i className="flaticon-comment"></i>
                          <span>Comment</span>{" "}
                          <span className="number">0 </span>
                        </a>
                      </li>
                      <li className="post-share">
                        <a href="#">
                          <i className="flaticon-share"></i>
                          <span>Share</span> <span className="number">5 </span>
                        </a>
                      </li>
                    </ul>
                    <form className="post-footer">
                      <div className="footer-image">
                        <a href="#">
                          <img
                            src="assets/images/user/user-22.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Write a comment..."
                        ></textarea>
                        <label>
                          <a href="#">
                            <i className="flaticon-photo-camera"></i>
                          </a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="load-more-posts-btn">
                  <a href="#">
                    <i className="flaticon-loading"></i> Load More Posts
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <aside className="widget-area">
                <div className="widget widget-birthday">
                  <div className="birthday-title d-flex justify-content-between align-items-center">
                    <h3>Today Birthdays</h3>
                    <span>
                      <a href="#">See All</a>
                    </span>
                  </div>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg1" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Earline Benally</a>
                      </h4>
                      <span>Today</span>
                    </div>
                  </article>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg2" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Jack Gulley</a>
                      </h4>
                      <span>Today</span>
                    </div>
                  </article>

                  <div className="birthday-title d-flex justify-content-between align-items-center">
                    <h3>Recent Birthdays</h3>
                    <span>
                      <a href="#">See All</a>
                    </span>
                  </div>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg3" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Lolita Benally</a>
                      </h4>
                      <span>May 18</span>
                    </div>
                  </article>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg4" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Russell Gulley</a>
                      </h4>
                      <span>May 20</span>
                    </div>
                  </article>

                  <div className="birthday-title d-flex justify-content-between align-items-center">
                    <h3>Coming Birthdays</h3>
                    <span>
                      <a href="#">See All</a>
                    </span>
                  </div>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg5" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Cindy L. Wilson</a>
                      </h4>
                      <span>July 18</span>
                    </div>
                  </article>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg6" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">Patricia E. Looney</a>
                      </h4>
                      <span>July 20</span>
                    </div>
                  </article>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage bg7" role="img"></span>
                    </a>

                    <div className="info">
                      <h4 className="title">
                        <a href="#">James G. Nelson</a>
                      </h4>
                      <span>July 21</span>
                    </div>
                  </article>
                </div>
                <div className="widget widget-explore-events">
                  <h3 className="widget-title">Explore Events</h3>

                  <article className="item">
                    <a href="#">
                      <img
                        src="assets/images/explore-events/explore-1.jpg"
                        alt="image"
                      />
                    </a>
                  </article>
                  <article className="item">
                    <a href="#">
                      <img
                        src="assets/images/explore-events/explore-2.jpg"
                        alt="image"
                      />
                    </a>
                  </article>
                </div>
                <div className="widget widget-who-following">
                  <h3 className="widget-title">{"Who's Following"}</h3>

                  <div className="following-item d-flex justify-content-between align-items-center">
                    <a href="#">
                      <img
                        src="assets/images/user/user-42.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                    <span className="name">
                      <a href="#">Shawn Lynch</a>
                    </span>
                    <span className="add-friend">
                      <a href="#">Add</a>
                    </span>
                  </div>
                  <div className="following-item d-flex justify-content-between align-items-center">
                    <a href="#">
                      <img
                        src="assets/images/user/user-43.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                    <span className="name">
                      <a href="#">Kenneth Perry</a>
                    </span>
                    <span className="add-friend">
                      <a href="#">Add</a>
                    </span>
                  </div>
                  <div className="following-item d-flex justify-content-between align-items-center">
                    <a href="#">
                      <img
                        src="assets/images/user/user-44.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                    <span className="name">
                      <a href="#">Janet Suarez</a>
                    </span>
                    <span className="add-friend">
                      <a href="#">Add</a>
                    </span>
                  </div>
                  <div className="following-item d-flex justify-content-between align-items-center">
                    <a href="#">
                      <img
                        src="assets/images/user/user-45.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                    <span className="name">
                      <a href="#">Brian Mingo</a>
                    </span>
                    <span className="add-friend">
                      <a href="#">Add</a>
                    </span>
                  </div>
                  <div className="following-item d-flex justify-content-between align-items-center">
                    <a href="#">
                      <img
                        src="assets/images/user/user-46.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </a>
                    <span className="name">
                      <a href="#">Julia Ramos</a>
                    </span>
                    <span className="add-friend">
                      <a href="#">Add</a>
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstMiddleContent;
