import FirstMiddleContent from "../../components/content/middle";
import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import SecondMiddleContent from "../../components/content/middle/other";
import { useRouter } from "next/router";
function Index({ query }) {
  // const router = useRouter()
  // const { userId,type } = query;
  return (
    <>
      <MainLayout>
        <div class="page-banner-box bg-5">
          <h3>Neighbours</h3>
        </div>

        <div class="content-page-box-area">
          <div class="all-notifications-body">
            <div class="all-notifications-header d-flex justify-content-between align-items-center">
              <h3>Notifications</h3>

              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="flaticon-menu"></i>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i class="flaticon-edit"></i> Edit Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i class="flaticon-private"></i> Hide Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <i class="flaticon-trash"></i> Delete Notifications
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-55.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">James Vanwin</a>
                </h4>
                <span>Posted A Comment On Your Status</span>
                <span class="main-color">20 Minites Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-45.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Dwight Schoolcraft</a>
                </h4>
                <span>Sent You a Friend Request</span>
                <span class="main-color">35 Minites Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-48.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Susan Hadden</a>
                </h4>
                <span>Add a Photo in Design Group</span>
                <span class="main-color">50 Minites Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-49.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Herta Smith</a>
                </h4>
                <span>Posted in Graphic Design Learn</span>
                <span class="main-color">1 Hours Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-50.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Francis L. Tay</a>
                </h4>
                <span>Like Your Comment</span>
                <span class="main-color">5 Hours Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-51.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Laura Hildebrandt</a>
                </h4>
                <span>Comment On Your Status</span>
                <span class="main-color">1 Days Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-52.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Martha Wilkes</a>
                </h4>
                <span>Reacted To Your Comment "Happy Birthday"</span>
                <span class="main-color">3 Days Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-53.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Howard Harris</a>
                </h4>
                <span>Added a Photo in Graphic Design Group</span>
                <span class="main-color">7 Days Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-54.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">Martha Wilkes</a>
                </h4>
                <span>Added a Photo in Graphic Design Group</span>
                <span class="main-color">7 Days Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
            </div>
            <div class="item d-flex justify-content-between align-items-center">
              <div class="figure">
                <a href="my-profile.html">
                  <img
                    src="assets/images/user/user-30.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </a>
              </div>
              <div class="text">
                <h4>
                  <a href="my-profile.html">David Gibson</a>
                </h4>
                <span>Commented on Your Newstatus</span>
                <span class="main-color">1 Month Ago</span>
              </div>
              <div class="icon">
                <a href="#">
                  <i class="flaticon-x-mark"></i>
                </a>
              </div>
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
