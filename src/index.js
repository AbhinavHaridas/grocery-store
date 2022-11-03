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
import Paymentpage from "./Home pages/Payment/Payment";
import FAQ from "./Home pages/faq/Faq";
import Offers from "./Home pages/Components/Offers/Offers";
import Terms from "./Home pages/Components/Terms"
import Order from "./Home pages/YourOrder";
import Modal_a from "./Home pages/Components/Modalordersummary";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        <Route path='/Payment' element={<Paymentpage/>} />
        <Route path='/Faq' element={<FAQ/>} />
        <Route path='/offers' element={<Offers/>} />   
        <Route path="/Terms" element={<Terms />} />
        <Route path="/yourorder" element={<Order />} />
        <Route path="/Modalordersummary" element={<Modal_a />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
