import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Landing pages/LandingPage";
import SignIn from "./Landing pages/SignIn";
import SignUp from "./Landing pages/SignUp";
import AboutUs from "./Landing pages/AboutUs";
import Home from "./Home pages/Home";
import Category from "./Home pages/Category";
import Contact from "./Landing pages/Contact";
import CategoryItems from "./Home pages/CategoryItems";
import CartPage from "./Home pages/CartPage";
import TrackOrder from "./Home pages/Components/TrackOrder";
import Dashboard from "./Home pages/Dashboard";

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
        <Route path="/category" element={<Category />} />
        <Route path="/categoryitems" element={<CategoryItems />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
