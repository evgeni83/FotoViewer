let initialState = {};

export const previewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_PHOTO_FOR_PREVIEW":
      return action.payload;

    default:
      return state;
  }
};
