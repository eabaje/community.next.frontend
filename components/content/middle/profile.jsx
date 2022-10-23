import AdvertSlider from "../../advert/slider";
import PaternalLink from "../../relationLink/paternal";
import Sidebar from "../../sidebar/Sidebar";
//import Tree from "../../tree";
//import Chart from "../../tree/chart";
import ContentWidget from "../../widget";
import StyledTree from "../../tree/hTree";
import AddEditProfile from "../../form/profile/AddEditProfile";

const isBrowser = typeof window !== "undefined";

function ProfileContent({ query }) {
  return isBrowser ? (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          {/* <div className="row">
            <AdvertSlider />
          </div> */}

          <div className="row">
            <div className="col-lg-12 col-md-12">
              {/*  <Tree user={null} />
               
                <Chart />*/}
              <AddEditProfile query={null} />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default ProfileContent;
