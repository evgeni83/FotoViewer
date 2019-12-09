let initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_LIST_OF_PHOTOS":
      const newState = state.concat(action.payload);
      return newState;

    default:
      return state;
  }
};
