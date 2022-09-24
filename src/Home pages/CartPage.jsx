import React from "react";
import styled from "styled-components";
import Address from "./Components/Address";
import Navbar from "./Components/Navbar";
import CartItem from "./Components/CartItem";

const CartItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
        </div>
    )
}

export default CartPage;
