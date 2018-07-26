import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="navbar">
   <div className="navbar__home">
    <NavLink exact to="/" className="navbar__item" activeClassName="is-active">Home</NavLink>
   </div>
    <nav className="navbar__right">
      <NavLink to="/TutorialMain" className="navbar__item" activeClassName="is-active">Tutorial</NavLink>
      <NavLink to="/STLMain" className="navbar__item" activeClassName="is-active">STL</NavLink>
      <NavLink to="/TipsAndTricksMain" className="navbar__item" activeClassName="is-active">Tips &amp; Tricks</NavLink>
    </nav>
  </nav>
);