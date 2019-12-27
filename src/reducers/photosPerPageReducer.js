let initialState = 20;

export const photosPerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PHOTOS_PER_PAGE":
      return action.photosPerPage;

    default:
      return state;
  }
};
