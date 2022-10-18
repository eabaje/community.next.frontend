import React from "react";
import ReactImageFallback from "react-image-fallback";
import Carousel, { Modal, ModalGateway } from "react-images";

import styles from "../../styles/dialog.doc.module.css";

export default function ({ node }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);

  const toggleLightbox = React.useCallback(
    () => setLightboxIsOpen((s) => !s),
    []
  );

  const images = React.useMemo(
    () =>
      node?.docs
        ? node.docs.map((doc) => ({
            caption: doc.title,
            source: `http://digisoft.co.il/docs/${doc.img}`,
          }))
        : [],
    [node]
  );

  if (!node?.docs) {
    return null;
  }

  return (
    <>
      <div>מסמכים:</div>
      <div className={styles.gallery}>
        {node.docs.map((doc, index) => (
          <div
            className={styles.image}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setLightboxIsOpen(true);
            }}
          >
            <ReactImageFallback src={`http://digisoft.co.il/docs/${doc.img}`} />
          </div>
        ))}
      </div>
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              frameProps={{ autoSize: "height" }}
              views={images}
            />
          </Modal>
        )}
      </ModalGateway>
    </>
  );
}
