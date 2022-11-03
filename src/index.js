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
import Order from "./Home pages/YourOrder";
import Modal_a from "./Home pages/Components/Modalordersummary";
import ForgotPassword from "./Landing pages/Components/ForgotPassword";
import Offers from "./Home pages/Components/Offers/Offers";
import Terms from "./Home pages/Components/Terms";

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
        <Route path="/yourorder" element={<Order />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/Modalordersummary" element={<Modal_a />} />
        <Route path="/offers" element={<Offers />} />
        <Route path= "/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
