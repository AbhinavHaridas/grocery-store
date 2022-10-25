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

const Model = ({ open, setOpen }) => {
    if (open) {
        return (
    <div id="my-modal" class="modal" onClick={() => setOpen(false)}>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Order Summary</h2>
        </div>
        <div class="modal-body">
          <p class="orderitem" align="left">Order Items</p>
          <table class="table_summary">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Savings</th>
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

          <p></p>
        </div>
        <div class="detail-modal">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa velit
            repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam nemo
            commodi ab</p>
        </div>
      </div>
    </div>
    )
    }
}

export default Modal_a;