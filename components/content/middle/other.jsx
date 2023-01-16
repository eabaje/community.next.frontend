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
import { useState } from "react";
const isBrowser = typeof window !== "undefined";

function SecondMiddleContent({ query }) {
  const { type } = query;
  const router = useRouter();
  const [relation, setRelation] = useState([{}]);

  {
    router?.query.type === "paternal"
      ? "My Paternal Relations"
      : router?.query?.type === "maternal"
      ? "My Maternal Relations"
      : router?.query?.type === "spousal"
      ? "My Spousal Relations"
      : "My Relations ";
  }

  const { isLoading, error, data } = useQuery(["relations"], () =>
    makeRequest
      .get(`/user/getAllRelationByCategory/${userId}/${type}`)
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
              {data ? (
                <StyledTree user={null} />
              ) : (
                <h4 style={{ textAlign: "center", paddingTop: "40px" }}>
                  No link found!Update your profile
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default SecondMiddleContent;
