import React, { useRef, useState } from "react";
import "../../Home pages/Styles/Ordersummary.css"

// const modal = document.querySelector('#my-modal');
// const modalBtn = document.querySelector('#modal-btn');

// // modalBtn.addEventListener('click', openModal);
// window.addEventListener('click', outsideClick);


// function openModal() {
//   modal.style.display = 'block';
// }

// function outsideClick(e) {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//   }
// }



const Modal_a = ({ isOpen, toggle }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ordersum" align="center">
      <button id="modal-btn" onClick={() => setOpen(true)} class="button">Click Here</button>
      <Model open={open} setOpen={setOpen} />
    </div>
  )
};


export const Model = ({ open, setOpen }) => {
  if (open) {
    return (
      <div id="my-modal" class="modal" onClick={() => setOpen(false)}>
        <div class="modal-content">
          <div class="modal-header">
            <h2>Order Summary</h2>
          </div>
          <div class="modal-body">
            <h2 class="orderitem" align="left">Order Items</h2>
            <table class="table_summary" >
              <tr>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
              </tr>
            </table>
            <p>Sub-total:1200</p>
            <p>Delivery:20</p>
            <p>Grand Total:1220</p>
          </div>
          <div class="detail-modal">
            <h2 class="orderitem" align="left">Order Details</h2>
            <ul>
              <p align="left">Order id:</p>
              <p align="left"> Date: </p>
              <p align="left"> Delivery Address: </p>
              <p align="left"> Payment Method: </p>
              <p align="left"> Delivery Status: </p>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default Modal_a;