import AdvertSlider from "../../advert/slider";
import PaternalLink from "../../relationLink/paternal";
import Sidebar from "../../sidebar/Sidebar";
//import Tree from "../../tree";
//import Chart from "../../tree/chart";
import ContentWidget from "../../widget";
import StyledTree from "../../tree/hTree";

const isBrowser = typeof window !== "undefined";

function SecondMiddleContent({ query }) {
  return isBrowser ? (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <aside className="widget-area">
            <Sidebar />
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">Paternal Links</h3>
              <PaternalLink user={null} />
            </div>
            <ContentWidget content={null} />
          </aside>
        </div>

        <div className="col-lg-9 col-md-12">
          {/* <div className="row">
            <AdvertSlider />
          </div> */}

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <StyledTree user={null} />
              {/*   <Chart />*/}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default SecondMiddleContent;
