import React from "react";
import Preloader from "../../Preloader/Preloader";

export default ({ urls, showThePhoto, togglePhotoSize }) => {
  if (urls) {
    return (
      <img
        src={urls.full}
        alt="img"
        className="preview__photo"
        onLoad={showThePhoto}
        onClick={togglePhotoSize}
      />
    );
  } else {
    return <Preloader />;
  }
};
