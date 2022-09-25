import React from "react";
import styled from "styled-components";
import Address from "./Components/Address";
import Navbar from "./Components/Navbar";
import CartItem from "./Components/CartItem";
import End from "./Components/End";

const CartItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`

const CartPage = () => {
    return (
        <div style={{backgroundColor: 'rgb(179, 173, 173)'}}>
            <Navbar />
            <Address />
            <CartItems>
                <CartItem />
                <CartItem />
                <CartItem />
            </CartItems>
            <End />
        </div>
    )
}

export default CartPage;
