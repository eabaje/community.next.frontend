import AdvertSlider from "../../advert/slider";
import PaternalLink from "../../relationLink/paternal";
import Sidebar from "../../sidebar/Sidebar";
//import Tree from "../../tree";
//import Chart from "../../tree/chart";
import ContentWidget from "../../widget";
import StyledTree from "../../tree/hTree";
import Tree from "../../tree";
import { useRouter } from "next/router";
import { fetchDataAll } from "../../../helpers/query";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";
const isBrowser = typeof window !== "undefined";

function SecondMiddleContent({ query }) {
  const { type } = query;
  const router = useRouter();
  const [relation, setRelation] = useState([{}]);

  const getAllSiblingInfo = (userId) => {
    fetchDataAll(`user/getAllRelation/${userId}/${type}`)((user) => {
      setRelation(user);
    })((err) => {
      toast.error(err);
    });
  };

  const {
    isLoading: relationLoading,
    error: relationError,
    data: relationData,
  } = useQuery(["user"], () =>
    makeRequest
      .get(`/user/getAllRelation/${user.UserId}/${type}`)
      .then((res) => {
        return res.data;
      })
  );

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
              {relationData ? (
                <StyledTree user={null} />
              ) : (
                "No link found!Update your profile."
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default SecondMiddleContent;
