import React, { useState } from "react";
//import ReactFamilyTree from "react-family-tree";
import nodes from "./sample.json";
//import PinchZoomPan from "pinch-zoom-pan";
import styles from "../../styles/tree.module.css";
import FamilyNode from "./familyTree";
import useDialog from "./useDialog";
import Dialog from "./Dialog";

const myID = "0";
const WIDTH = 240;
const HEIGHT = 280;

export default function Tree() {
  const [rootId, setRootId] = useState(myID);
  const [markHolucost, setMarkHolucost] = useState(false);
  // const { Dialog, open: openDialog } = useDialog();
  //const onResetClick = React.useCallback(() => setRootId(myID), []);

  return (
    <div className={styles.root}>
      <button onClick={() => setMarkHolucost((m) => !m)}>
        {markHolucost ? "הצג רגיל" : "סמן  נספים בשואה"}
      </button>
      {/* <PinchZoomPan captureWheel min={0.4} max={2.5} className={styles.wrapper}>
        <ReactFamilyTree
          nodes={nodes}
          rootId={rootId}
          width={WIDTH}
          height={HEIGHT}
          canvasClassName={styles.tree}
          renderNode={(node) => (
            <FamilyNode
              key={node.id}
              node={node}
              isRoot={node.id === rootId}
              onSubClick={setRootId}
              //  openDialog={openDialog}
              markHolucost={markHolucost}
              style={{
                width: WIDTH,
                height: HEIGHT,
                transform: `translate(${node.left * (WIDTH / 2)}px, ${
                  node.top * (HEIGHT / 2)
                }px)`,
              }}
            />
          )}
        /> 
      </PinchZoomPan>*/}
      <Dialog />
    </div>
  );
}
