import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="presentation-card">
    <svg className="presentation-card__icon">
      <use xlinkHref={ "images/sprite.svg#icon-" + props.iconName } />
    </svg>
    <h3 className="presentation-card__title">{props.title}</h3>
    <Link className="presentation-card__link" to={props.destinationRoute}>Pagina Principala &rarr;</Link>
  </div>
);