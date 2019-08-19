import React from 'react';
import { cast } from './ShowPage.module.css';
// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
export default ({ name, image, casts }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <div className={cast}>
        {casts.map(cast => (
          <div className="t-person">
            <p>{cast.name}</p>
            <img src={cast.image} alt={cast.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
