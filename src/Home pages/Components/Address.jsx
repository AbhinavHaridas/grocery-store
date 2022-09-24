import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Text from "./Items/Text";

const ADDRESSES = [
    'address-1',
    'address-2',
    'address-3',
    'address-4'
]

const TextP = styled.p`
font-family: 'Forum', cursive; 
font-size: 3vh;
color: black;
margin-left : 20px;
user-select: none;
`;

const Address = () => {
    const [address, setAddress] = useState(0);
    
    return (
        <div style={{
            backgroundColor: 'white',
            width: '100%',
            height: '30%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Text>Your Cart</Text>
            <div style={{            
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'}}
            >
                <TextP>Currently Delivering to: </TextP>
                <TextP>{ADDRESSES[address]}</TextP>
                <i class="fa-solid fa-pencil fa-2xl" style={{marginLeft: '40px'}} 
                onClick={() => {setAddress((address + 1) % ADDRESSES.length)}} />
            </div>
        </div>
    )
}

export default Address;