import React from 'react';
import './Payment.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../../Landing pages/Components/Footer";
import SearchNavbar from '../Components/SearchNavbar';


class Payment extends React.Component {
 
 
  render() {
  
     
    return (
    
      <div className="maincontainer" style={{backgroundColor:"rgb(224 224 224)",paddingBottom: 20}}>
       <h1 align="center" className='checkouthead'>CHECKOUT</h1>
        <div class="containerpay">
          <div class="py-5 text-center">
          {/* <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css" /> */}

            
          </div>
          <div class="row">
            <div class="columncart" >
              <div>
              <h4 class="carthead">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              
              <ul class="list-group mb-3">
                
                <li class="oldtotal">
                  <span>Total</span>
                  <strong className='space1'>₹20</strong>
                </li>
                <li class="discount">
                  <span class="text-success">-₹5</span>
                </li>
                <li class="newtotal">
                  <span>Total</span>
                  <strong className='space1'>₹15</strong>
                </li>
              </ul>
              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="redeembutton">Redeem</button>
                  </div>
                </div>
              </form>
              </div>
            </div>
            <div class="col-md-8 order-md-1">
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="firstname">
                    <label for="firstName">Name</label>
                    <input type="text" class="form-control" id="username" required />
                    <div class="invalid-feedback">
                      Valid Name is required.
                    </div>
                  </div>
              
                <div class="address1">
                  <label for="address">Address</label>
                  <textarea rows="4" cols="30" class="form-control" id="address" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
               
                </div>
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4" />
        
                <h4 class="mb-3">Payment</h4>
            
                <div class="d-block my-3">
                  <div class="cardpay">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <small><label class="custom-control-label" for="credit">Credit card/Debit Card</label></small>
                  </div>
                  <div class="codpay">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <small><label class="custom-control-label" for="paypal">COD</label></small>
                  </div>
                </div>
                <div class="row">
                  <div class="cardname">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" required />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                    </div>
                  </div>
                  <div class="cardnumber">
                    <label for="cc-number">Credit/Debit card number</label>
                    <input type="text" class="form-control" id="cc-number" required />

                    <div class="invalid-feedback">
                    </div>
                  </div>
                </div>
                <div class="row" >
                  <div class="Expirationpay">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <small> <div class="invalid-feedback">
                      Expiration date required
                    </div></small>
                  </div>
                  <div class="CVVpay">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                    <small>Security code required</small>
                    </div>
                    
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="buttonsubmit" type="button">Continue to checkout</button>
              </form>
            </div>
          </div>
          
        </div>
     
      </div>
      
    
)
};
}




const Paymentpage = () => {
  return (
      <>
      <SearchNavbar />
      <Payment />
      
      <Footer />
      </>
  )
}
export default Paymentpage;
