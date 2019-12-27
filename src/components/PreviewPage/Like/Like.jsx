import React from "react";

const Like = ({
  list,
  id,
  liked_by_user,
  toggleLikeThePhoto,
  isButtonEnabled
}) => {
  let button;

  if (liked_by_user) {
    button = "LIKED";
  } else {
    button = "UNLIKED";
  }

  return (
    <button
      disabled={!isButtonEnabled}
      onClick={() => {
        toggleLikeThePhoto(list, id, liked_by_user);
      }}
    >
      {button}
    </button>
  );
};

export default Like;
