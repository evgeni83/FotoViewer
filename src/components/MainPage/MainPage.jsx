import React from "react";
import { NavLink } from "react-router-dom";
import "./MainPage.css";

const MainPage = props => {
  const { list, handlePhotoForPreview } = props;

  return (
    <div>
      <h2>Main Page</h2>
      <div className="contentWrapper">
        {list.map((item, i) => {
          return (
            <div
              key={i}
              className="imageCard"
              onClick={() => handlePhotoForPreview(item)}
            >
              <NavLink to="/preview">
                <img
                  src={item.urls.thumb}
                  alt="img"
                  className="imageCard__img"
                />
              </NavLink>
              <p className="imageCard__imgName">{item.user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
