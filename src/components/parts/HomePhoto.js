import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home-photo">
    <div className="home-photo__background">&nbsp;</div>
    <Link to="/TutorialMain" className="home-photo__button">Tutorial  <span>&rarr;</span></Link>
  </div>
);