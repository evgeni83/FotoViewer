import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./Auth/Auth";
import MainPage from "./MainPage/MainPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import { authorize } from "../actions/action";
import "./App.css";

const App = ({ authorize, list }) => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Auth authorize={authorize} />
          </Route>
          <Route exact path="/main">
            <MainPage list={list} />
          </Route>
          <Route path="/preview/:photoId">
            <PreviewPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    authorize: () => {
      dispatch(authorize());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);