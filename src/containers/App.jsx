import React from "react";
import { connect } from "react-redux";
//import {  } from "../actions/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import PreviewPage from "../components/PreviewPage/PreviewPage";

import "./App.css";

let App = props => {
  const { listPhotos } = props;

  console.log(props);
  

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
            <li>
              <Link to="/preview">PreviewPage</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/preview">
            <PreviewPage />
          </Route>
          <Route path="/">
            <MainPage listPhotos={listPhotos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    listPhotos: state.listPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
