import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = props => {
  return (
    <>
      <h2>Main Page</h2>
      <div className="contentWrapper">
        {props.list.map((item, i) => {
          return (
            <div key={i} className="imageCard">
              <NavLink to={`/preview/${item.id}`}>
                <img
                  src={item.urls.thumb}
                  alt="img"
                  className="imageCard__img"
                />
              </NavLink>
              <p className="imageCard__imgName">
                {item.user.name || item.id}
              </p>
              <p className="imageCard__myLike">
                {item.liked_by_user ? "liked" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;