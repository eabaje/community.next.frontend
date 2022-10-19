import React from "react";
import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import DialogDocs from "./DialogDocs";

export default function ({ isOpen, node, onDismiss }) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} style={{ direction: "rtl" }}>
      <p>{node?.name || ""}</p>
      <DialogDocs node={node} />
    </Dialog>
  );
}
