import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import AMOUNT from "./AMOUNT";
import { useEffect } from "react";

const TextC = styled.p`
  font-family: "Forum", cursive;
  font-size: 2.2vh;
  color: black;
  margin-left: 4%;
`;

const TextP = styled.p`
  font-family: "Forum", cursive;
  font-size: 3vh;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
`;

const Amount = styled.div`
  padding: 6px;
  background-color: rgb(179, 173, 173);
  width: 10vh;
  height: 3.5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.8vh;
  margin-left: 20px;
  margin-right: 20px;
`;

const CartItem = ({ name, price, quantity, Count, image }) => {
  const [count, setCount] = useState(Count);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const updateCount = () => {
      var urlencoded = new URLSearchParams();
      urlencoded.append("customer_id", "2");
      urlencoded.append("cart_items[0][quantity]", count);
    
      var requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow'
      };
    
      fetch("http://localhost:8000/categories/update_cart_quantity", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  };


  if (count > 0) {
    return (
      <div
        style={{
          width: "110vh",
          height: "20vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          marginTop: "2vh",
          borderRadius: "6px",
          transtion: "0.2s",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <img
          src={image}
          alt="none"
          style={{ height: "20vh", alignSelf: "center" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "6vh",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextP>{name}</TextP>
            <TextP>₹{price * count}</TextP>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1vh",
              height: "4vh",
              flexDirection: "row",
              justifyContent: "flex-start",
              textAlign: "center",
              paddingTop: "0vh",
            }}
          >
            <TextC>Qty: {quantity}</TextC>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1vh",
              height: "10vh",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Amount onClick={() => setOpen(!open)}>
              <TextC>{AMOUNT[index]}</TextC>
              <i
                class="fa-solid fa-caret-down fa-2xl"
                style={{ marginLeft: "2vh" }}
              />
            </Amount>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <i
                class="fa-solid fa-trash-can fa-2xl"
                style={{
                  marginTop: "1.5vh",
                  marginRight: "4vh",
                  cursor: "pointer",
                }}
                onClick={() => {setCount(0)}}
              />
              <Amount>
                <i
                  class="fa-solid fa-plus"
                  onClick={() => {setCount(count + 1); updateCount();}}
                ></i>
                <TextC>{count}</TextC>
                <i
                  class="fa-solid fa-minus"
                  onClick={() => {
                    if (count !== 0) {setCount(count - 1); updateCount();}
                  }}
                ></i>
              </Amount>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginTop: "2vh",
              position: "relative",
              marginBottom: "0vh",
            }}
          >
            <Dropdown open={open} setIndex={setIndex} setOpen={setOpen} />
          </div>
        </div>
      </div>
    );
  }
};

export default CartItem;

// import React from "react";
// import { useState } from "react";
// import styled from "styled-components";
// import Dropdown from "./Dropdown";
// import AMOUNT from "./AMOUNT";

// const TextC = styled.p`
// font-family: 'Forum', cursive;
// font-size: 2.2vh;
// color: black;
// margin-left: 4%;
// `;

// const TextP = styled.p`
// font-family: 'Forum', cursive;
// font-size: 3vh;
// color: black;
// margin-left: 20px;
// margin-right: 20px
// `;

// const Amount = styled.div`
//     padding: 6px;
//     background-color: rgb(179, 173, 173);
//     width: 10vh;
//     height: 3.5vh;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     margin-top: 1.8vh;
//     margin-left: 20px;
//     margin-right: 20px;
// `

// const CartItem = () => {
//     const [count, setCount] = useState(1);
//     const [open, setOpen] = useState(false);
//     const [index, setIndex] = useState(0);

//     if (count > 0) {
//         return (
//         <div style={{
//             width: '110vh',
//             height: '20vh',
//             backgroundColor: 'white',
//             display: 'flex',
//             flexDirection: 'row',
//             marginTop: '2vh',
//             borderRadius: '6px',
//             transtion: '0.2s',
//             boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
//             }}>
//                 <img src='https://imgur.com/SDCKI4n.png' alt='none' style={{height: '20vh', alignSelf: 'center'}} />
//                 <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 width: '100%'
//                 }}>
//                     <div style = {{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     height: '6vh',
//                     justifyContent: 'space-between',
//                     width: '100%',
//                     }}>
//                         <TextP>Nagpur Oranges</TextP>
//                         <TextP>${40.99 * (count)}</TextP>
//                     </div>
//                     <div style={{
//                     display: 'flex',
//                     marginTop: '1vh',
//                     height: '4vh',
//                     flexDirection: 'row',
//                     justifyContent: 'flex-start',
//                     textAlign: 'center',
//                     paddingTop: '0vh'
//                     }}>
//                         <TextC>Qty: {count}</TextC>
//                     </div>
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         marginTop: '1vh',
//                         height: '10vh',
//                         width: '100%',
//                         justifyContent: 'space-between',
//                         alignItems: 'center'
//                     }}>
//                         <Amount onClick={() => setOpen(!open)}>
//                             <TextC>{AMOUNT[index]}</TextC>
//                             <i class="fa-solid fa-caret-down fa-2xl"
//                             style={{marginLeft: '2vh'}} />
//                         </Amount>
//                         <div style={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                         }}>
//                         <i class="fa-solid fa-trash-can fa-2xl"
//                         style={{marginTop: '1.5vh',
//                         marginRight: '4vh',
//                         cursor: 'pointer'}}
//                         onClick={() => setCount(0)} />
//                         <Amount>
//                             <i class="fa-solid fa-plus" onClick={() => setCount(count + 1)}></i>
//                             <TextC>{count}</TextC>
//                             <i class="fa-solid fa-minus" onClick={() => {
//                                 if (count !== 0) setCount(count - 1)
//                             }}></i>
//                         </Amount>
//                         </div>
//                     </div>
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'start',
//                         marginTop: '2vh',
//                         position: 'relative',
//                         marginBottom: '0vh'}}>
//                             <Dropdown open={open} setIndex={setIndex} setOpen={setOpen}/>
//                     </div>
//                 </div>
//         </div>
//     )
//     }

// }

// export default CartItem;
