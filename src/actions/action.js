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
