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
import "./App.css";

let App = props => {
  const { listPhotos, previewImage } = props.state;

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/preview">
            <PreviewPage previewImage={previewImage}/>
          </Route>
          <Route exact path="/">
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
