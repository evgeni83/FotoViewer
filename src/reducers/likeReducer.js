let initialState = "";

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE_THE_PHOTO":
      console.log("toggle " + action.liked_by_user);
      return action.liked_by_user;

    default:
      return state;
  }
};
