import React from "react";
import "./MainPage.css";

const MainPage = props => {
  const { listPhotos } = props;
  console.log(listPhotos);

  return (
    <div>
      <h2>MainPage</h2>
      <div className="contentWrapper">
        {listPhotos.map((item, i) => {
          return (
            <div key={i} className="imageCard">
              <img src={item.img} alt="img" className="imageCard__img" />
              <p className="imageCard__imgName">{item.imgName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
