let initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_LIST_OF_PHOTOS":
      return action.list;

    default:
      return state;
  }
};
