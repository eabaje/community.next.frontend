import React from "react";
import classNames from "clsx";
import ReactImageFallback from "react-image-fallback";

import styles from "../../styles/tree.node.module.css";

export default function FamilyNode({
  node,
  isRoot,
  onSubClick,
  openDialog,
  style,
  markHolucost,
}) {
  return (
    <div className={styles.root} style={style}>
      <div
        onClick={() => openDialog(node)}
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot,
          markHolucost && node.holucost === "1" && styles.holucost
        )}
      >
        <div>
          <div className={styles.name}>{node.name}</div>

          <ReactImageFallback
            alt={node.name}
            src={`http://digisoft.co.il/ftree/pic${node.img}.jpg`}
            width={70}
            height={70}
          />

          <div className={styles.dates}>
            {node.birt_date} - {node.deat_date}
          </div>
          <div className={styles.dates}>
            {node.birt_hebdate} - {node.deat_hebdate}
          </div>

          {node.birt_place}
          <br />
          {node.deat_place}
        </div>
        {node.hasSubTree && (
          <div
            className={classNames(styles.sub, styles[node.gender])}
            onClick={() => onSubClick(node.id)}
          />
        )}
      </div>
    </div>
  );
}
