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
        <div class="page-banner-box bg-7">
          <h3>Events</h3>
        </div>

        <div class="events-inner-box-style d-flex justify-content-between align-items-center">
          <div class="title">
            <h3>All Events</h3>
          </div>
          <div class="events-btn">
            <a href="#" class="default-btn">
              Add New Event
            </a>
          </div>
          <div class="events-search-box">
            <form>
              <input
                type="text"
                class="input-search"
                placeholder="Search events..."
              />
              <button type="submit">
                <i class="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-1.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>12:30PM to 02:30PM</span>
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>Online</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>July 30, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-2.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>02:30PM to 04:30PM</span>
                <h3>
                  <a href="#">Dance Conference</a>
                </h3>
                <p>Online</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>August 06, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-3.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>12:30PM to 02:30PM</span>
                <h3>
                  <a href="#">Food Festival</a>
                </h3>
                <p>1157 Anmoore Road New York, NY</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>July 30, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-4.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>12:30PM to 02:30PM</span>
                <h3>
                  <a href="#">Film Festival</a>
                </h3>
                <p>2611 Deer Ridge Drive Newark, NJ</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>August 13, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-5.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>03:30PM to 05:30PM</span>
                <h3>
                  <a href="#">Language Festival</a>
                </h3>
                <p>Online</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>August 20, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-6.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>05:30PM to 07:30PM</span>
                <h3>
                  <a href="#">Business Conference</a>
                </h3>
                <p>1535 Point Street Chicago, IL</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>August 27, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-7.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>02:30PM to 04:30PM</span>
                <h3>
                  <a href="#">Shopping Conference</a>
                </h3>
                <p>Online</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>July 30, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="single-events-card">
              <a href="#">
                <img src="assets/images/events/events-8.jpg" alt="image" />
              </a>
              <div class="events-content">
                <span>12:30PM to 02:30PM</span>
                <h3>
                  <a href="#">Music Party</a>
                </h3>
                <p>2428 Terra Street Seattle, WA</p>

                <div class="events-footer d-flex justify-content-between align-items-center">
                  <a href="#" class="default-btn">
                    Attend
                  </a>
                  <span>September 03, 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form class="events-form">
          <h3>Add New Event</h3>

          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Category</label>
                <select class="form-select">
                  <option selected="1">Digital Marketing</option>
                  <option value="2">Dance Conference</option>
                  <option value="3">Food Festival</option>
                  <option value="4">Film Festival</option>
                  <option value="5">Language Festival</option>
                  <option value="6">Business Conference</option>
                  <option value="7">Shopping Conference</option>
                  <option value="8">Music Party</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Event Name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Event Location</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Event Date</label>
                <input type="text" class="form-control" id="datepicker" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Start Time</label>
                <input type="time" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>End Time</label>
                <input type="time" class="form-control" />
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label>Event Description</label>
                <textarea class="form-control" />
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <button type="submit" class="default-btn">
                Created Event
              </button>
            </div>
          </div>
        </form>
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
