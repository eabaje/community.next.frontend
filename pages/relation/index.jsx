import MainLayout from "../../layout/mainLayout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../helpers/axios";
import { useState } from "react";
import FamilyTreeJs from "../../components/tree/tree";
//import StyledTree from "../../components/tree/hTree";
const isBrowser = typeof window !== "undefined";
function Index({ query }) {
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

  const {
    isLoading,
    error,
    data: relationData,
  } = useQuery(["relations"], () =>
    makeRequest.get(`/user/getAllRelation/${userId}`).then((res) => {
      return relationData;
    })
  );

  console.log("data", relationData);
  return (
    <>
      <MainLayout>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            {/* <div className="row">
            <AdvertSlider />
          </div> */}

            <div className="row">
              <div className="col-lg-12 col-md-12">
                {/*   <StyledTree users={null} />
                <Tree user={null} />

                 <Chart />
                {data ? (
                  // <StyledTree user={null} />
                ) : (
                  <h4 style={{ textAlign: "center", paddingTop: "40px" }}>
                    No link found!Update your profile
                  </h4>
                )}*/}
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
