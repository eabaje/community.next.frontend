import React from "react";
import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";
import dynamic from "next/dynamic";
import "../../styles/htree.module.css";
import StyledTreeItem from "./hTreeItem";

// const ExampleTree = () => (
//   <Tree label={<div>Root</div>}>
//     <TreeNode label={<div>Child 1</div>}>
//       <TreeNode label={<div>Grand Child</div>} />
//     </TreeNode>
//   </Tree>
// );
const isBrowser = typeof window !== "undefined";
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const StyledTree = ({ query }) => {
  return isBrowser ? (
    <>
      <h3>
        {query?.type === "paternal"
          ? "My Paternal Links"
          : query?.type === "maternal"
          ? "My Maternal Links"
          : query?.type === "spousal"
          ? "My Spousal Links"
          : "My Relation Links"}
      </h3>
      <hr />
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <StyledNode>
            <StyledTreeItem user={null} />
          </StyledNode>
        }
      >
        <TreeNode label={<StyledNode>Child 1</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode>Child 2</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
            <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
            <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>Child 3</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
        </TreeNode>
      </Tree>
    </>
  ) : null;
};
export default StyledTree;
//export default dynamic(() => Promise.resolve(StyledTree), { ssr: false });
