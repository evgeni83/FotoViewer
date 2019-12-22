import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getPhotos } from "../../actions/action";
import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.getPhotos(1, 20);
  }

  render() {
    return (
      <div>
        <h2>Main Page</h2>
        <div className="contentWrapper">
          {this.props.list.map((item, i) => {
            return (
              <div key={i} className="imageCard">
                <NavLink to={`/preview/${item.id}`}>
                  <img
                    src={item.urls.thumb}
                    alt="img"
                    className="imageCard__img"
                  />
                </NavLink>
                <p className="imageCard__imgName">{item.user.name}</p>
                <p className="imageCard__myLike">
                  {item.liked_by_user ? "liked" : "unliked"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: (numberOfPages, photosPerPage) => {
      dispatch(getPhotos(numberOfPages, photosPerPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
