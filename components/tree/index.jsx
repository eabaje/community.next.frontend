import React, { useState } from "react";
//import ReactFamilyTree from "react-family-tree";
import nodes from "./sample.json";
//import PinchZoomPan from "pinch-zoom-pan";
import styles from "../../styles/tree.module.css";
import FamilyNode from "./familyTree";
import useDialog from "./useDialog";
import Dialog from "./Dialog";
//import {PinchView} from 'react-pinch-zoom-pan'

import dynamic from "next/dynamic";
const ReactFamilyTree = dynamic(() => import("react-family-tree"), {
  ssr: false,
});
const PinchZoomPan = dynamic(() => import("pinch-zoom-pan"), {
  ssr: false,
});

const PinchView = dynamic(() => import("react-pinch-zoom-pan"), {
  ssr: false,
});

const myID = "0";
const WIDTH = 240;
const HEIGHT = 280;

export default function Tree() {
  const [rootId, setRootId] = useState(myID);
  const [markHolucost, setMarkHolucost] = useState(false);
  const { Dialog, open: openDialog } = useDialog();
  const onResetClick = React.useCallback(() => setRootId(myID), []);

  return (
    <>
      {/* <PinchView
        debug
        backgroundColor="#ddd"
        maxScale={4}
        containerRatio={(400 / 600) * 100}
      >
        <img
          src={"http://lorempixel.com/600/400/nature/"}
          style={{
            margin: "auto",
            width: "100%",
            height: "auto",
          }}
        />
      </PinchView> */}
      <div className={styles.root}>
        <div style={{ fontSize: 40, textAlign: "center" }}>
          {"משפחת  "} {nodes[0].name}
          {markHolucost ? " 7/1942 עד 2/1944" : " 7/1942"}
        </div>

        {rootId !== myID && (
          <button
            onClick={() => setRootId(myID)}
            style={{
              width: 140,
              height: 30,
              transform: `translate(60px,-50px)`,
              color: "black",
              backgroundColor: "lightgray",
              fontSize: 20,
            }}
          >
            חזור להתחלה
          </button>
        )}

        {/* <PinchZoomPan
          captureWheel
          min={0.2}
          max={2.5}
          className={styles.wrapper}
          key={rootId}
        > */}
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
              openDialog={openDialog}
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
        {/* </PinchZoomPan> */}
        <Dialog />
      </div>
    </>
  );
}
