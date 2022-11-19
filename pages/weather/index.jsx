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
        <div class="page-banner-box bg-11">
          <h3>Weather</h3>
        </div>

        <div class="weather-body">
          <div class="weather-image-wrap">
            <a href="#">
              <img src="assets/images/weather/weather-2.png" alt="`image" />
            </a>
          </div>

          <form class="weather-form">
            <div class="title">
              <h3>Search Location</h3>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Country and Timezone</label>
                  <input type="email" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Forecast Days</label>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Temperature Unit</label>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">
                  Check Weather
                </button>
              </div>
            </div>
          </form>
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
