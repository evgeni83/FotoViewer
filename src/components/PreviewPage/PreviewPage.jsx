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
        <a
          href={
            props.previewPhoto.user ? props.previewPhoto.user.links.html : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="imageCard__imgName">
            {props.previewPhoto.user
              ? props.previewPhoto.user.name || props.previewPhoto.id
              : "noname"}
          </p>
        </a>
        <p>
          {new Date(
            Date.parse(
              props.previewPhoto.promoted_at || props.previewPhoto.created_at
            )
          ).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <div>{props.previewPhoto.likes} likes</div>
        <Like
          list={props.list}
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
