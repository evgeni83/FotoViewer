import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos, incrementPagesCounter } from "../../actions/mainPageAction";
import "./MainPage.css";
import Preloader from "../Preloader/Preloader";
import MainPage from "./MainPage";

class MainPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadPossible: true
    };
  }

  componentDidMount() {
    this.props.getPhotos(
      this.props.pagesCounter,
      this.props.photosPerPage,
      this.props.list,
      this.props.previewPhoto
    );

    if (this.props.previewPhoto.urls) {
      const elem = document.querySelector(`img[src="${this.props.previewPhoto.urls.regular}"]`);
      elem.scrollIntoView();
    }

    window.addEventListener("scroll", this.loadMorePhotos);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMorePhotos);
  }

  loadMorePhotos = async () => {
    let documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    let viewportHeight = window.innerHeight;
    let scrollTopPosition = window.pageYOffset;
    let scrollBottomPosition = viewportHeight + scrollTopPosition;
    let distanceToBottomOfTheDocument = documentHeight - scrollBottomPosition;
    const distanceToLoad = 250;

    if (distanceToBottomOfTheDocument > distanceToLoad) {
      this.setState({
        isLoadPossible: true
      });
    }

    if (distanceToBottomOfTheDocument < distanceToLoad) {
      if (this.state.isLoadPossible) {
        await this.props.incrementPagesCounter();
        this.props.getPhotos(
          this.props.pagesCounter,
          this.props.photosPerPage,
          this.props.list,
          this.props.previewPhoto
        );
        this.setState({
          isLoadPossible: false
        });
      }
    }
  };

  render() {
    if (this.props.list.length > 0) {
      return <MainPage list={this.props.list} />;
    } else {
      return <Preloader />;
    }
  }
}



const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: (numberOfPages, photosPerPage, list, previewPhoto) => {
      dispatch(getPhotos(numberOfPages, photosPerPage, list, previewPhoto));
    },
    incrementPagesCounter: () => {
      dispatch(incrementPagesCounter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
