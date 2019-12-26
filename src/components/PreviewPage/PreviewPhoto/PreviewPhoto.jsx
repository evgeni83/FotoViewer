import React from "react";
import Preloader from "../../Preloader/Preloader";

export default props => {
  if (props.urls) {
    return (
      <img
        src={props.urls.regular}
        alt="img"
        className="previewImg"
        onLoad={props.showThePhoto}
      />
    );
  } else {
    return <Preloader />;
  }
};
