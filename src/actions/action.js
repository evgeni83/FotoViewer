export const getNewListOfPhotos = list => {
  return {
    type: "GET_NEW_LIST_OF_PHOTOS",
    payload: list
  };
};

export const handlePhotoForPreview = photosListItem => {
  return {
    type: "HANDLE_PHOTO_FOR_PREVIEW",
    payload: photosListItem
  };
};

export const toggleLikeThePhoto = (id, liked_by_user) => {
  return {
    type: "TOGGLE_LIKE_THE_PHOTO",
    id: id,
    liked_by_user: !liked_by_user
  };
};

