import React, { useEffect, useState } from "react";
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
    padding-top: 2vh;
    padding-bottom: 2vh;
`



const CartPage = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8000/categories//fetch_cart_items?customer_id=2", requestOptions)
            .then(response => response.json())
            .then(json => setJsonData(json))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div style={{backgroundColor: 'rgb(179, 173, 173)', minHeight: '1200px'}}>
            <Navbar />
            <div style={{position: 'sticky', top: '0%', width: '100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px -7px'}}>
                <Address />
            </div>
            <CartItems>
                {
                    jsonData?.map((item) => {
                        return (
                            <CartItem name={item.name} 
                            price={item.price} 
                            quantity={item.quantity}
                            Count={item.no_of_items}
                            />
                        )
                    })
                }
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
