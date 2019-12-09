import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Unsplash, { toJson } from "unsplash-js";
import Auth from "./Auth/Auth";
import MainPage from "./MainPage/MainPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import { getNewListOfPhotos, handlePhotoForPreview } from "../actions/action";
import "./App.css";

export const unsplash = new Unsplash({
  accessKey: "69a71056cc02e30857197cc9b6512542d933bc3b17e30eb385b6aba920bf5734",
  secret: "351731b0a6ee01c5e04b2c865b630042e52bd9ef4c261baeb752be5f717c8331",
  callbackUrl: "http://localhost:3000/main"
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

if (window.location.pathname === "/") {
  window.location.assign(authenticationUrl);
}

// const code = window.location.search.split("code=")[1];

// console.log(code);

// if (code) {
//   unsplash.auth
//     .userAuthentication(code)
//     .then(res => res.json())
//     .then(json => {
//       // Сохраняем полученный токен
//       console.log(json);
//       unsplash.auth.setBearerToken(json.access_token);
//       // Теперь можно сделать что-то от имени пользователя
//       // Например, поставить лайк фотографии
//       console.log(unsplash._bearerToken);
//     });
// }

let App = props => {
  const { list, preview, getNewListOfPhotos, handlePhotoForPreview } = props;

  if (list.length === 0) {
    unsplash.photos
      .listPhotos(1, 10, "latest")
      .then(toJson)
      .then(json => {
        getNewListOfPhotos(json);
      });
  }

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route exact path="/main">
            <MainPage
              list={list}
              handlePhotoForPreview={handlePhotoForPreview}
            />
          </Route>
          <Route exact path="/preview">
            <PreviewPage preview={preview} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getNewListOfPhotos: bindActionCreators(getNewListOfPhotos, dispatch),
    handlePhotoForPreview: bindActionCreators(handlePhotoForPreview, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
