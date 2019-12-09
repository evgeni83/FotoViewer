import React from 'react';
import { NavLink } from 'react-router-dom';
import './PreviewPage.css';

const PreviewPage = (props) => {

  const { preview } = props;
  console.log(preview);

  return (
    <div>
      <h2>PreviewPage</h2>
      <div>
        <NavLink to="/main">Go back to main page</NavLink>
      </div>
      <div>
        <img src={preview.urls.full} alt="img" className="previewImg" />
        <p>{preview.user.name}</p>
      </div>
    </div>
  )
};

export default PreviewPage;