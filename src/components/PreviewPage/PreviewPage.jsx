import React from "react";
import { NavLink } from "react-router-dom";
import Like from "./Like/Like";
import PreviewPhoto from "./PreviewPhoto/PreviewPhoto";

const PreviewPage = props => {
  return (
    <>
      <h2>PreviewPage</h2>
      <div>
        <NavLink to="/main">Go back to main page</NavLink>
        <div>{props.previewPhoto.likes} likes</div>
        <Like
          id={props.previewPhoto.id}
          liked_by_user={props.previewPhoto.liked_by_user}
          toggleLikeThePhoto={props.toggleLikeThePhoto}
          isButtonEnabled={props.isButtonEnabled}
        />
      </div>
      <div>
        <PreviewPhoto
          urls={props.previewPhoto.urls}
          showThePhoto={props.showThePhoto}
        />
      </div>
    </>
  );
};

export default PreviewPage;
