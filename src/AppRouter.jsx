import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;