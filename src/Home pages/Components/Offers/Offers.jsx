import React from 'react';
import "../Offers/offers.css";
import Navbar from "../SearchNavbar";
import Footer from "../../../Landing pages/Components/Footer";

const Offers1 = () => {
    return (
      <div class="container bootstrap snippets bootdey">
        <div class="row_off">
          <div class="col-md-5">
            <div class="alert alert-info alert-coupon">
              <h4>"#NEW50"</h4>
              <p>50% off on first order.</p>
            </div>

            <div class="alert alert-warning alert-coupon">
              <h4>"#FRUIT5"</h4>
              <p>5% cashback on seasonal fruits.</p>
            </div>

            <div class="alert alert-danger alert-coupon">
              <h4>"#VEG10"</h4>
              <p>10% Discount Vegetables.</p>
            </div>
          </div>

          <div class="col-md-5">
            <div class="alert alert-info alert-coupon">
              <h4>"#20SELFCARE"</h4>
              <p>20% off on personal care products</p>
            </div>

            <div class="alert alert-warning alert-coupon">
              <h4>"#5TH40"</h4>
              <p>40% off on more than 5 items .</p>
            </div>
            <div class="alert alert-danger alert-coupon">
              <h4>"#30BESTSELLER"</h4>
              <p>30% cashback on bestseller products.</p>
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