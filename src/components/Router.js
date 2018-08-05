import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './main_pages/Home';
import NotFound from './main_pages/NotFound';
import STLMain from './main_pages/STLMainLoadable';
import TutorialMain from './main_pages/TutorialMain';
import TipsAndTricks from './main_pages/TipsAndTricksMain';
import Navigation from './navigation/Navigation';
import Footer from './parts/Footer';

export default () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/STLMain" component={STLMain} />
        <Route exact path="/TutorialMain" component={TutorialMain} />
        <Route excat path="/TipsAndTricksMain" component={TipsAndTricks}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
