import { toJson } from "unsplash-js";
import { unsplash } from "../apis/unsplashAPI";

export const getPhotos = (
  numberOfPages,
  photosPerPage,
  list,
  previewPhoto
) => dispatch => {
  if (list.length === 0 || list.length < numberOfPages * photosPerPage) {
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
  }

  if (
    list.length > 0 &&
    previewPhoto.id &&
    list.find(item => item.id === previewPhoto.id).liked_by_user !==
      previewPhoto.liked_by_user
  ) {
    const newList = list.map(item => {
      if (item.id === previewPhoto.id) {
        item.liked_by_user = previewPhoto.liked_by_user;
      }
      return item;
    });

    return dispatch({ type: "SHOW_CURRENT_LIST", list: newList });
  }

  return dispatch({ type: "SHOW_CURRENT_LIST", list });
};

const listOfPhotos = (numberOfPages, photosPerPage, dispatch) => {
  unsplash.photos
    .listPhotos(numberOfPages, photosPerPage, "latest")
    .then(toJson)
    .then(list => {
      dispatch({ type: "GET_NEW_LIST_OF_PHOTOS", list });
    });
};

export const incrementPagesCounter = () => {
  return { type: "INCREMENT_PAGES_COUNTER" };
};
