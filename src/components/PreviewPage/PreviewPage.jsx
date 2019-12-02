import React from 'react';
import { NavLink } from 'react-router-dom';
import './PreviewPage.css';

const PreviewPage = (props) => {

  const { previewImage } = props;

  return (
    <div>
      <h2>PreviewPage</h2>
      <div>
        <NavLink to="/main">Go back to main page</NavLink>
      </div>
      <div>
        <img src={previewImage.img} alt="img" className="previewImg" />
        <p>{previewImage.imgAuthor}</p>
      </div>
    </div>
  )
};

export default PreviewPage;