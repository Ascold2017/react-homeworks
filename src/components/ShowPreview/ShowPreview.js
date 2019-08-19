import React from 'react';
import { Link } from 'react-router-dom';
import { container } from './ShowPreview.module.css';

export default ({ id, name, image, summary }) => {
  return (
    <div className={container}>
      <div>
        <Link to={`/show/${id}`}>{name}</Link>
        {image && <img src={image} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};
