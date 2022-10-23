import React from "react";
import styled from "styled-components";
import AMOUNT from "./AMOUNT";

const Menu = styled.div`
background-color: #8f8484;
width: 11vh;
margin-left: 2.1vh;
margin-top: -2vh;
text-align: center;
border: solid grey 1px;
user-select: none;
cursor: pointer;
`

const TextC = styled.p`
font-family: 'Forum', cursive; 
font-size: 2.2vh;
color: black;  
margin-left: 4%; 
`;

const getIndex = (element, array) => {
    for (let i = 0; i < array.length; i++) 
        if (array[i] === element) return i;
    return 0; 
}

const Dropdown = ({open, setIndex, setOpen}) => {
    if (open) {
        return (
            <Menu>
                {
                    AMOUNT.map((weight) => (
                        <>
                            <TextC><div onClick={
                                () => {
                                    setIndex(getIndex(weight, AMOUNT));
                                    setOpen(false);
                                }
                            }>{weight}</div></TextC>
                        </>
                    ))
                }
            </Menu>
        )
    }
}

export default Dropdown;