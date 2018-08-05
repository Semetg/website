import React from 'react';
import { Link } from 'react-router-dom';
import CodeAnimation from '../parts/CodeAnimation';

export default () => (
  <div className="tips-and-tricks-wrapper">
    <div className="tips-and-tricks__animation">
    <CodeAnimation />
    </div>
    <Link to="/TipsAndTricksMain" className="tips-and-tricks__button">Tips &amp; Tricks <span>&rarr;</span></Link>
  </div>
);