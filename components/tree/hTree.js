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

const StyledNodeMe = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid blue;
`;




const StyledTree = ({ users }) => {

  // get the top level parent


  const findOldest = (users) => {
    const maxAge = Math.max(...users.map(obj => obj.Level));
    return users.filter(obj => obj.Level === maxAge )[0];
  };

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
        label={findOldest &&<GetNodeTop user={findOldest}/>}
      >  
      {users.map((user) => (
     // Check the Level and the relationship
        <TreeNodeXS user={user} />
      
      ))}
       
      </Tree>
    </>
  ) : null;
};

const GetNodeTop = ({user}) => {

  // Get the top level 


  return (
        <>
         <StyledNode>
                {" "}
                <StyledTreeItem user={user} relation={"Father"} />
              </StyledNode>
        </>
  );
};

const GetNodeUser = ({user}) => {

  // Get the top level 


  return (
        <>
         <StyledNode>
                {" "}
                <StyledTreeItem user={user} relation={"Father"} />
              </StyledNode>
        </>
  );
};

const TreeNodeXS = ({users}) => {

  return (
    <>
      {props.data.map((user) => (
        <>
          <TreeNode
            label={
              <StyledNode>
                {" "}
               
                <StyledTreeItem user={user} relation={"Father"} />
                {/* {user.partner!==null ? user.partner.indexOf(",")>0 ? user.partner.spilt(",")
                &&(<StyledTreeItem user={user.filter(e=>e.RelationId===)} relation={"Father"} />)} */}
              </StyledNode>
            }
          >
           
           {item.children && <renderChildren child={item.children} user={item}/>}
           


          </TreeNode>
          
        </>
      ))}
    </>
  );
};

 const renderChildren = ({child,users}) => {  

  const findOldest = (users) => {
    const maxAge = Math.max(...users.map(obj => obj.Level));
    return users.filter(obj => obj.Level === maxAge )[0];
  };


  //renderChildren(child)
  return (
    <>
   
  
      {node.children.map((child) => (
         <TreeNode
         label={
           <StyledNode>
             {" "}
             <StyledTreeItem user={child} relation={child.RelationType} />
           </StyledNode>
         }
       />
       
        
      
      ))}
   
    
    </>
  );
};



export default StyledTree;


//export default dynamic(() => Promise.resolve(StyledTree), { ssr: false });
