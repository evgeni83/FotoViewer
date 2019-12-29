import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = props => (
  <>
    <h2>Main Page</h2>
    <div className="contentWrapper">
      {props.list.map((item, i) => {
        return (
          <div key={i} className="imageCard">
            <NavLink to={`/preview/${item.id}`}>
              <img src={item.urls.thumb} alt="img" className="imageCard__img" />
            </NavLink>
            <a
              href={item.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="imageCard__imgAuthorlink"
            >
              {item.user.name || item.id}
            </a>
            <p className="imageCard__imgDate">
              {new Date(
                Date.parse(item.promoted_at || item.created_at)
              ).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "numeric",
                day: "numeric"
              })}
            </p>
            <p className="imageCard__likes">{item.likes}</p>
          </div>
        );
      })}
    </div>
  </>
);

export default MainPage;
