import React from 'react';
import { NavLink } from 'react-router-dom';

const PreviewPage = (props) => {
  console.log(props);

  const { previewImage } = props;

  return (
    <div>
      <h2>PreviewPage</h2>
      <div>
        <NavLink to="/">Go back to main page</NavLink>
      </div>
      <div>
        <img src={previewImage.img} alt="img" className="" />
        <p>{previewImage.imgAuthor}</p>
      </div>
    </div>
  )
};

export default PreviewPage;