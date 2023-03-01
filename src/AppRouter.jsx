import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/about" component={AboutUs} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;