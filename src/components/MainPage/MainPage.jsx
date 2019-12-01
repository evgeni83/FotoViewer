import React from "react";
import { NavLink } from 'react-router-dom';
import "./MainPage.css";

const MainPage = props => {
  const { listPhotos, handleImageForPreview } = props;

  return (
    <div>
      <h2>MainPage</h2>
      <div className="contentWrapper">
        {listPhotos.map((item, i) => {
          return (
            <div key={i} className="imageCard" onClick={() => handleImageForPreview(item)} >
              <NavLink to="/preview">
                <img src={item.img} alt="img" className="imageCard__img" />
              </NavLink>
              <p className="imageCard__imgName">{item.imgName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
