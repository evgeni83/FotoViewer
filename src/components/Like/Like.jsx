import React from "react";

const Like = props => {
  let button;

  if (props.liked_by_user) {
    button = "LIKED";
  } else {
    button = "UNLIKED";
  }

  return (
    <button
      onClick={() => props.toggleLikeThePhoto(props.id, props.liked_by_user)}
    >
      {button}
    </button>
  );
};

export default Like;
