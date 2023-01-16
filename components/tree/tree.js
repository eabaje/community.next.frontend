import React from "react";
import dynamic from "next/dynamic";
//import "../../styles/treeJs.module.css";
//import "./treejs";
import { useRouter } from "next/router";

const DynamicComponentWithNoSSR = dynamic(() => import("./treejs"), {
  ssr: false,
});

const isBrowser = typeof window !== "undefined";

const FamilyTreeJs = ({ query }) => {
  const router = useRouter();
  console.log("router", router);
  return isBrowser ? (
    <>
      <div id="tree"></div>
      {DynamicComponentWithNoSSR}
    </>
  ) : null;
};
//export default FamilyTreeJs;
export default dynamic(() => Promise.resolve(FamilyTreeJs), { ssr: false });
