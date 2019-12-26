import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getThePhoto,
  toggleLikeThePhoto,
  isButtonEnabledAC
} from "../../actions/previewPageAction";
import "./PreviewPage.css";
import PreviewPage from "./PreviewPage";

class PreviewPageContainer extends Component {
  componentDidMount() {
    const list = this.props.list;
    const previewPhotoId = this.props.match.params.photoId;
    this.props.getThePhoto(list, previewPhotoId);
  }

  showThePhoto = e => {
    e.persist();
    e.target.classList.add("loaded");
  };

  render() {
    return (
      <PreviewPage
        previewPhoto={this.props.previewPhoto}
        toggleLikeThePhoto={this.props.toggleLikeThePhoto}
        isButtonEnabled={this.props.isButtonEnabled}
        showThePhoto={this.showThePhoto}
      />
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getThePhoto: (list, id) => {
      dispatch(getThePhoto(list, id));
    },
    toggleLikeThePhoto: (id, liked_by_user) => {
      dispatch(toggleLikeThePhoto(id, liked_by_user));
    },
    isButtonEnabledAC: isEnabled => {
      dispatch(isButtonEnabledAC(isEnabled));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PreviewPageContainer));
