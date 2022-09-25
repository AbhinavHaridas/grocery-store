import React from "react";
import styled from "styled-components";
import AMOUNT from "./AMOUNT";

const Menu = styled.div`
background-color: blue;
/* width: 10vh;
height: 15vh; */
display: flex;
justify-content: row;
text-align: center;
`

const TextC = styled.p`
font-family: 'Forum', cursive; 
font-size: 2.2vh;
color: black;  
margin-left: 4%; 
`;

const Dropdown = ({open, setIndex, index}) => {
    if (open) {
        return (
            <Menu>
                {
                    AMOUNT.map((weight) => (
                        <>
                            <TextC>{weight}</TextC>
                        </>
                    ))
                }
            </Menu>
        )
    }
}

export default Dropdown;