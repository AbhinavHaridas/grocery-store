
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Landing pages/LandingPage";
import SignIn from "./Landing pages/SignIn";
import SignUp from "./Landing pages/SignUp";
import AboutUs from "./Landing pages/AboutUs";
import Home from "./Home pages/Home";
import Category from './Home pages/Category';
import Contact from "./Landing pages/Contact";
import TrackOrder from "./Home pages/TrackOrder";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<App />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path='/category' element={<Category/>} />
        <Route path='/trackorder' element={<TrackOrder/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
