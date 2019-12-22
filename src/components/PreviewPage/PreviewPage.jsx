import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Like from "../Like/Like";
import Preloader from "../Preloader/Preloader";
import { getThePhoto, toggleLikeThePhoto } from "../../actions/action";
import "./PreviewPage.css";

class PreviewPage extends Component {
  componentDidMount() {
    this.props.getThePhoto(this.props.match.params.photoId);
  }

  render() {
    if (this.props.previewPhoto.id) {
      return (
        <div>
          <h2>PreviewPage</h2>
          <div>
            <NavLink to="/main">Go back to main page</NavLink>
            <div>{this.props.previewPhoto.likes} likes</div>
            <Like
              id={this.props.previewPhoto.id}
              liked_by_user={this.props.previewPhoto.liked_by_user}
              toggleLikeThePhoto={this.props.toggleLikeThePhoto}
            />
          </div>
          <div>
            <img
              src={this.props.previewPhoto.urls.regular}
              alt="img"
              className="previewImg"
            />
            <p>{}</p>
          </div>
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getThePhoto: id => {
      dispatch(getThePhoto(id));
    },
    toggleLikeThePhoto: (id, liked_by_user) => {
      dispatch(toggleLikeThePhoto(id, liked_by_user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PreviewPage));
