import { redirectToAuthPage, unsplash } from "../apis/unsplashAPI";
import { toJson } from "unsplash-js";

export const authorize = () => () => redirectToAuthPage();

const listOfPhotos = (numberOfPages, photosPerPage, dispatch) => {
  unsplash.photos
    .listPhotos(numberOfPages, photosPerPage, "latest")
    .then(toJson)
    .then(list => dispatch({ type: "GET_NEW_LIST_OF_PHOTOS", list }));
};

export const getPhotos = (numberOfPages, photosPerPage) => dispatch => {
  if (
    localStorage.getItem("unsplashBearerToken") &&
    localStorage.getItem("unsplashBearerToken") !== "undefined"
  ) {
    unsplash.auth.setBearerToken(localStorage.getItem("unsplashBearerToken"));
    return listOfPhotos(numberOfPages, photosPerPage, dispatch);
  } else {
    const code = window.location.search.split("code=")[1];
    if (code) {
      unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
          localStorage.setItem("unsplashBearerToken", json.access_token);
          return listOfPhotos(numberOfPages, photosPerPage, dispatch);
        });
    }
  }
};

export const getThePhoto = id => dispatch => {
  unsplash.auth.setBearerToken(localStorage.getItem("unsplashBearerToken"));
  return unsplash.photos
    .getPhoto(id)
    .then(toJson)
    .then(previewPhoto => {
      dispatch(setPreviewPhoto(previewPhoto));
    });
};

export const toggleLikeThePhoto = (id, liked_by_user) => dispatch => {
  if (!liked_by_user) {
    return unsplash.photos
      .likePhoto(id)
      .then(toJson)
      .then(json => {
        dispatch(setPreviewPhoto(json.photo));
      });
  } else {
    return unsplash.photos
      .unlikePhoto(id)
      .then(toJson)
      .then(json => {
        dispatch(setPreviewPhoto(json.photo));
      });
  }
};

const setPreviewPhoto = previewPhoto => {
  return { type: "SET_PREVIEW_PHOTO", previewPhoto };
};
