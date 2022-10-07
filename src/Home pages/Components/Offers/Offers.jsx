import React from 'react';
import "./offers.css"
import Navbar from '../Navbar';
import Footer from "../../../Landing pages/Components/Footer";

const Offers1 = () => {
    return (
       
<div class="container bootstrap snippets bootdey">
  <div class="row">
    <div class="col-md-5">
      
      <div class="alert alert-info alert-coupon">
        <h4>"#NEW50"</h4>
        <p>50% off on first order.</p>
      </div>    
      
      <div class="alert alert-warning alert-coupon">
        <h4>"#HDFC10"</h4>
        <p>10% off on HDFC cards.</p>
      </div>
          
      <div class="alert alert-danger alert-coupon">
        <h4>"#UPI10"</h4>
        <p>10% Discount on UPI service.</p>
      </div> 
    </div>
    
    <div class="col-md-5">
     
      <div class="alert alert-info alert-coupon">
        <h4>"#2NDDELFREE"</h4>
        <p>Free Delivery on second order.</p>
      </div>    
      
      <div class="alert alert-warning alert-coupon">
        <h4>"#5TH40"</h4>
        <p>40% off on your 5th order.</p>
      </div> 
      <div class="alert alert-danger alert-coupon">
        <h4>"#FREEDEL299"</h4>
        <p>Free delivery on orders above 299.</p>
      </div> 
    </div>
  </div>
</div>
);
}

const Offers = () => {
    return (
        <>
        <Navbar />
        
        <Offers1 />
        
        <Footer />
        </>
    )
  }
export default Offers;