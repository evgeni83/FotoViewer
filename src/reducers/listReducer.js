let initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_LIST_OF_PHOTOS":
      return state.concat(action.list);

    case "SHOW_CURRENT_LIST":
      return action.list;

    case "SET_LIKE_STATUS":
      const newState = state.map(item => {
        if (item.id === action.photo.id) {
          item.liked_by_user = action.photo.liked_by_user;
          item.likes = action.photo.likes;
        }
        return item;
      });
      return newState;

    default:
      return state;
  }
};
