import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../helpers/axios";
import UserItemWidget from "../../components/widget/user.item.widget";
import { GetAllSchoolWorkAction } from "../../context/actions/user/user.action";

function Index({ query }) {
  // const router = useRouter()
  const { userId } = query;

  //Get Notification

  // const {
  //   isLoading: notifyLoading,
  //   error: notifyError,
  //   data: notifyData,
  // } = useQuery(["notification"], () =>
  //   makeRequest
  //     .get(`/event/getAllNotificationSent/${user.UserId}`)
  //     .then((res) => {
  //       return res.data;
  //     })
  // );
  const { isLoading, error, data } = useQuery(["place"], () =>
    GetAllSchoolWorkAction(userId, "pl")
  );
  const newChildArray = data?.map(
    selectProps("Country", "State", "City", "Address")
  );

  //  console.log("neighbour", newChildArray);
  return (
    <>
      <MainLayout>
        <div class="page-banner-box bg-5">
          <h3>Neighbours</h3>
        </div>

        <div class="groups-inner-box-style d-flex justify-content-between align-items-center">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="all-groups-tab"
                data-bs-toggle="tab"
                href="#all-groups"
                role="tab"
                aria-controls="all-groups"
              >
                All Neighbours
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="most-members-tab"
                data-bs-toggle="tab"
                href="#most-members"
                role="tab"
                aria-controls="most-members"
              >
                Most Members
              </a>
            </li>
          </ul>

          <div class="groups-search-box">
            <form>
              <input
                type="text"
                class="input-search"
                placeholder="Search Neighbours..."
              />
              <button type="submit">
                <i class="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="all-groups"
            role="tabpanel"
          >
            <div class="row justify-content-center">
              <UserItemWidget user={null} />
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-1.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-1.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Graphic Design</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">62</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">6451</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2016</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-2.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-2.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Marketing</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">173</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">7451</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2015</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-3.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-3.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Fitness Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">122</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">9453</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2013</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-4.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-4.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Restaurant</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">321</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">1151</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-5.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-5.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Travel Life</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">99</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">650</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2017</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-6.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-6.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Fashion Day</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">159</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">1929</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2018</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-7.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-7.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Photography</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">150</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">321</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-8.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-8.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Child Care</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">58</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">224</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2020</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-9.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-9.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Music Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">120</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">165</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2015</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-10.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-10.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Developer</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">145</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">3245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-11.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-11.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Sports Fun</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">245</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">4245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2010</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-12.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-12.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Teaching Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">62</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">6245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2012</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="load-more-posts-btn">
              <a href="#">
                <i class="flaticon-loading"></i> Load More
              </a>
            </div>
          </div>

          <div class="tab-pane fade" id="most-members" role="tabpanel">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-1.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-1.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Graphic Design</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">62</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">6451</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2016</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-2.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-2.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Marketing</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">173</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">7451</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2015</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-3.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-3.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Fitness Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">122</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">9453</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2013</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-4.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-4.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Restaurant</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">321</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">1151</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-5.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-5.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Travel Life</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">99</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">650</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2017</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-6.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-6.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Fashion Day</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">159</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">1929</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2018</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-7.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-7.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Photography</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">150</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">321</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-8.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-8.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Child Care</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">58</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">224</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2020</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-9.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-9.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Music Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">120</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">165</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2015</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-10.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-10.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Developer</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">145</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">3245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2019</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-11.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-11.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Sports Fun</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">245</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">4245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2010</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-groups-card">
                  <div class="groups-image">
                    <a href="#">
                      <img
                        src="assets/images/groups/groups-bg-12.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div class="groups-content">
                    <div class="groups-info d-flex justify-content-between align-items-center">
                      <a href="#">
                        <img
                          src="assets/images/groups/groups-12.jpg"
                          alt="image"
                        />
                      </a>
                      <div class="text ms-3">
                        <h3>
                          <a href="#">Teaching Club</a>
                        </h3>
                        <span>Public Neighbours</span>
                      </div>
                    </div>
                    <ul class="statistics">
                      <li>
                        <a href="#">
                          <span class="item-number">62</span>
                          <span class="item-text">Post</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">6245</span>
                          <span class="item-text">Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="item-number">2012</span>
                          <span class="item-text">Since</span>
                        </a>
                      </li>
                    </ul>
                    <div class="join-groups-btn">
                      <button type="submit">Connect</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="load-more-posts-btn">
              <a href="#">
                <i class="flaticon-loading"></i> Load More
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
