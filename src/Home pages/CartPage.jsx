import React from "react";
import styled from "styled-components";
import Address from "./Components/Address";
import CartItem from "./Components/CartItem";
import End from "./Components/End";
import SearchNavbar from "./Components/SearchNavbar";

const CartItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
`

const CartPage = () => {
    return (
        <div style={{backgroundColor: 'rgb(179, 173, 173)', minHeight: '1200px'}}>
            <SearchNavbar />
            <div style={{position: 'sticky', top: '0%', width: '100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px -7px'}}>
                <Address />
            </div>
            <CartItems>
                <CartItem />
                <CartItem />
                <CartItem />
            </CartItems>
            <div style={{position: 'sticky', bottom: '0%', width: '100%', top: '86%', 
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px -10px 15px -7px'}}>
                <End />
            </div>
        </div>
    )
}

export default CartPage;
