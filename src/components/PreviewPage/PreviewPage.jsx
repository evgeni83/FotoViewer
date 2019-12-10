import React from "react";
import { NavLink } from "react-router-dom";
import Like from "../Like/Like";
import "./PreviewPage.css";

const PreviewPage = props => {
  const { preview, toggleLikeThePhoto } = props;
  return (
    <div>
      <h2>PreviewPage</h2>
      <div>
        <NavLink to="/main">Go back to main page</NavLink>
        <span> {preview.likes} likes</span>
        <span>
          <Like
            liked_by_user={preview.liked_by_user}
            toggleLikeThePhoto={toggleLikeThePhoto}
            id={preview.id}
          />
        </span>
      </div>
      <div>
        <img src={preview.urls.full} alt="img" className="previewImg" />
        <p>{preview.user.name}</p>
      </div>
    </div>
  );
};

export default PreviewPage;
