import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";

const TextP = styled.p`
font-family: 'Forum', cursive; 
font-size: 3vh;
color: black;  
margin-left: 20px;
margin-right: 20px
`;

const CheckOutButton = styled.div `
    background-color: #4daf4d;
    display: flex;
    width: 30vh;
    height: 10vh;
    align-items: center;
    border-radius: 20px;
    user-select: none;
    cursor: pointer;
    transition: filter 200ms;
    :hover {
        filter: brightness(1.2);
    }
`

const End = ({ jsonData }) => {
    const [number, setNumber] = useState(0);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        jsonData?.map((item) => {
            return setNumber(number + item.no_of_items);
        })

        jsonData?.map((item) => {
            return setCost(cost + item.price);
        }) 
    }, [jsonData])

    return (
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            height: '14vh',
            justifyContent: 'space-around',
            marginTop: '10px',
            alignItems: 'center'
        }}>
            <TextP>No of Items: {number}</TextP>
            <TextP>Total Cost: ₹{cost}</TextP>
            <CheckOutButton>
                <TextP>Proceed to Checkout</TextP>
            </CheckOutButton>
        </div>
    )
}

export default End;