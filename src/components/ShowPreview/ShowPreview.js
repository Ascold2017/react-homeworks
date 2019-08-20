import React from 'react';
import { Link } from 'react-router-dom';
import { container } from './ShowPreview.module.css';
import classNames from 'classnames'

export default ({ id, name, image, summary }) => {
  return (
    <div className={classNames(container, 't-preview')}>
      <div>
        <Link to={`/show/${id}`} className="t-link">{name}</Link>
        {image && <img src={image} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};
