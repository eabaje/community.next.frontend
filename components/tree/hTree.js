import React from "react";
import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";
import dynamic from "next/dynamic";
import "../../styles/htree.module.css";
import StyledTreeItem from "./hTreeItem";
import { useRouter } from "next/router";
// const router = useRouter()

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
  const router = useRouter();
  console.log("router", router);
  return isBrowser ? (
    <>
      <h3>
        {router?.query.type === "paternal"
          ? "My Paternal Links"
          : router?.query?.type === "maternal"
          ? "My Maternal Links"
          : router?.query?.type === "spousal"
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
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <StyledTreeItem user={null} />
            </StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          />
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          />
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <StyledTreeItem user={null} />
            </StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  {" "}
                  <StyledTreeItem user={null} />
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  {" "}
                  <StyledTreeItem user={null} />
                </StyledNode>
              }
            />
          </TreeNode>
        </TreeNode>
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <StyledTreeItem user={null} />
            </StyledNode>
          }
        >
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          />
          <TreeNode
            label={
              <StyledNode>
                {" "}
                <StyledTreeItem user={null} />
              </StyledNode>
            }
          />
        </TreeNode>
      </Tree>
    </>
  ) : null;
};
export default StyledTree;
//export default dynamic(() => Promise.resolve(StyledTree), { ssr: false });
