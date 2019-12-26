import { toJson } from "unsplash-js";
import { unsplash } from "../apis/unsplashAPI";

export const getThePhoto = (list, id) => dispatch => {
  unsplash.auth.setBearerToken(localStorage.getItem("unsplashBearerToken"));

  const previewPhoto = list.find(item => item.id === id);

  if (previewPhoto) {
    return dispatch(setPreviewPhoto(previewPhoto));
  } else {
    return unsplash.photos
      .getPhoto(id)
      .then(toJson)
      .then(previewPhoto => {
        dispatch(setPreviewPhoto(previewPhoto));
      });
  }
};

export const toggleLikeThePhoto = (id, liked_by_user) => dispatch => {
  dispatch(isButtonEnabledAC(false));
  if (!liked_by_user) {
    return unsplash.photos
      .likePhoto(id)
      .then(toJson)
      .then(json => {
        dispatch(setPreviewPhoto(json.photo));
        dispatch(isButtonEnabledAC(true));
      });
  } else {
    return unsplash.photos
      .unlikePhoto(id)
      .then(toJson)
      .then(json => {
        dispatch(setPreviewPhoto(json.photo));
        dispatch(isButtonEnabledAC(true));
      });
  }
};

export const isButtonEnabledAC = isEnabled => {
  return { type: "IS_BUTTON_ENABLED", isEnabled };
};

const setPreviewPhoto = previewPhoto => {
  return { type: "SET_PREVIEW_PHOTO", previewPhoto };
};
