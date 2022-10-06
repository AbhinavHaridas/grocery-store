import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ADDRESSES = [
    'address-1',
    'address-2',
    'address-3',
    'address-4'
]

const Text = styled.h3`
    font-family: 'Forum', cursive; 
    font-size: 40px;
    color: black;  
    user-select: none; 
    padding-left: 10vh;
`

const TextP = styled.p`
font-family: 'Forum', cursive; 
font-size: 3vh;
color: black;
margin-left: 2vh;
user-select: none;
`;

const Address = () => {
    const [address, setAddress] = useState(0);
    
    return (
        <div style={{
            backgroundColor: 'white',
            width: '100%',
            height: '12vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text>Your Cart</Text>
            <div style={{            
                display: 'flex',
                paddingRight: '10vh',
                alignItems: 'center'}}
            >
                <TextP>Currently Delivering to: </TextP>
                <TextP>{ADDRESSES[address]}</TextP>
                <i class="fa-solid fa-pencil fa-2xl"  
                onClick={() => {setAddress((address + 1) % ADDRESSES.length)}} style={{marginLeft: '12vh'}}/>
            </div>
        </div>
    )
}

export default Address;