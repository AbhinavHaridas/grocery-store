import React from "react";
import styled from "styled-components";
import Address from "./Components/Address";
import Navbar from "./Components/Navbar";
import CartItem from "./Components/CartItem";
import End from "./Components/End";

const CartItems = styled.div `
    margin-top: 23vh;
    margin-bottom: 14vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`

const CartPage = () => {
    return (
        <div style={{backgroundColor: 'rgb(179, 173, 173)', minHeight: '105vh'}}>
            <div style={{position: 'fixed', top: '0%', width: '100%'}}>
                <Navbar />
                <Address />
            </div>
            <CartItems>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </CartItems>
            <div style={{position: 'fixed', bottom: '0%', width: '100%'}}>
                <End />
            </div>
        </div>
    )
}

export default CartPage;
