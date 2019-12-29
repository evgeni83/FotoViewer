import React from "react";
import liked from "./liked.png";
import unliked from "./unliked.png";
import "./Like.css"

const Like = ({
  list,
  id,
  liked_by_user,
  toggleLikeThePhoto,
  isButtonEnabled
}) => {
  let heart;

  if (liked_by_user) {
    heart = liked;
  } else {
    heart = unliked;
  }

  return (
    <button
      className="likeButton"
      disabled={!isButtonEnabled}
      onClick={() => {
        toggleLikeThePhoto(list, id, liked_by_user);
      }}
    >
      <img src={heart} alt="like" className="likeButtonImage" />
    </button>
  );
};

export default Like;
