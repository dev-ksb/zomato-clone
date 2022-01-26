import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <div className="z-20">
          <ImageViewer
            src={props.images}
            currentIndex={currentImage}
            displayScroll={false}
            onClose={closeViewer}
          />
        </div>
      )}
      <div
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.images[0]}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p className="text-xs text-gray-500">{props.pages} Pages</p>
        </div>
      </div>
    </>
  );
};

export default MenuCollection;
