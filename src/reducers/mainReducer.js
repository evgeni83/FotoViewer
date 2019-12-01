const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_PREVIEW_IMAGE":
            
      const newState = {
        listPhotos: state.listPhotos,
        previewImage: {
          img: action.img,
          imgName: action.imgName,
          imgAuthor: action.imgAuthor,
          imgDate: action.imgDate,
          isImgLiked: action.isImgLiked
        }
      };
      
      return newState;

    default:
      return state;
  }
};

export default mainReducer;
