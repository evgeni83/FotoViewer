import React from "react";
import { connect } from "react-redux";
//import {  } from "../actions/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import PreviewPage from "../components/PreviewPage/PreviewPage";
import { handleImageForPreview } from '../actions/action';
import Unsplash from "unsplash-js";
import "./App.css";

const unsplash = new Unsplash({
  accessKey: "69a71056cc02e30857197cc9b6512542d933bc3b17e30eb385b6aba920bf5734",
  secret: "351731b0a6ee01c5e04b2c865b630042e52bd9ef4c261baeb752be5f717c8331",
  callbackUrl: "http://192.168.0.103:3000/main"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

if (window.location.pathname === "/") {
  window.location.assign(authenticationUrl);
}

let App = props => {
  const { listPhotos, previewImage } = props.state;

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/preview">
            <PreviewPage previewImage={previewImage} />
          </Route>
          <Route path="/main">
            <MainPage listPhotos={listPhotos} handleImageForPreview={props.handleImageForPreview} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleImageForPreview: ev => dispatch(handleImageForPreview(ev))
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
