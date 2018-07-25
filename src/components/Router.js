import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import STLMain from './STLMain';
import TutorialMain from './TutorialMain';
import TipsAndTricks from './TipsAndTricksMain';
import CustomNavbar from './CustomNavbar';

export default () => (
  <BrowserRouter>
    <div>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/STLMain" component={STLMain} />
        <Route exact path="/TutorialMain" component={TutorialMain} />
        <Route excat path="/TipsAndTricksMain" component={TipsAndTricks}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
