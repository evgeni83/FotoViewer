import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./containers/App";
import mainReducer from "./reducers/mainReducer";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

let initialState = {
  listPhotos: [
    {
      img:
        "https://avatars.mds.yandex.net/get-pdb/2111302/48e3a69a-bd81-4b1e-bbfe-38bdee28c330/s1200",
      imgName: "Image 1 name",
      imgAuthor: "Alex",
      imgDate: "25.10.2018",
      isImgLiked: false
    },
    {
      img:
        "https://avatars.mds.yandex.net/get-pdb/2497652/9e2032e4-9ff6-440f-bb15-590c4956725e/s1200",
      imgName: "Image 2 name",
      imgAuthor: "Alex",
      imgDate: "25.10.2018",
      isImgLiked: false
    },
    {
      img:
        "https://avatars.mds.yandex.net/get-pdb/49816/8425cefe-5a6a-4491-a21c-561f25846969/s1200",
      imgName: "Image 3 name",
      imgAuthor: "Alex",
      imgDate: "25.10.2018",
      isImgLiked: true
    },
    {
      img:
        "https://avatars.mds.yandex.net/get-pdb/480866/71698f6b-efb3-4c26-a684-e1dde9f359be/s1200",
      imgName: "Image 4 name",
      imgAuthor: "Alex",
      imgDate: "25.10.2018",
      isImgLiked: true
    },
    {
      img:
        "https://avatars.mds.yandex.net/get-pdb/251121/3240550a-ee7b-4e7d-856c-1f3bf83591de/s1200",
      imgName: "Image 5 name",
      imgAuthor: "Alex",
      imgDate: "25.10.2018",
      isImgLiked: false
    }
  ],
  previewImage: {
    img: "",
    imgName: "",
    imgAuthor: "",
    imgDate: "",
    isImgLiked: false
  }
};

const store = createStore(mainReducer, initialState);

ReactDOM.render(
    <App store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
