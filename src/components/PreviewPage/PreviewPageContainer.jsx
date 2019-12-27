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
    const numberOfPages = this.props.pagesCounter;
    const photosPerPage = this.props.photosPerPage;
    this.props.getThePhoto(list, previewPhotoId, numberOfPages, photosPerPage);
  }

  showThePhoto = e => {
    e.persist();
    e.target.classList.add("loaded");
  };

  render() {
    return (
      <PreviewPage
        list={this.props.list}
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
    getThePhoto: (list, id, numberOfPages, photosPerPage) => {
      dispatch(getThePhoto(list, id, numberOfPages, photosPerPage));
    },
    toggleLikeThePhoto: (list, id, liked_by_user) => {
      dispatch(toggleLikeThePhoto(list, id, liked_by_user));
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
