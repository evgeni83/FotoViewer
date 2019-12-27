import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./Auth/Auth";
import MainPageContainer from "./MainPage/MainPageContainer";
import PreviewPageContainer from "./PreviewPage/PreviewPageContainer";
import { authorize } from "../actions/authAction";
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
            <MainPageContainer list={list} />
          </Route>
          <Route path="/preview/:photoId">
            <PreviewPageContainer list={list} />
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
