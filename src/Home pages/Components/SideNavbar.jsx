import React from "react";
import styled from "styled-components";

const Item = styled.div`
    width: 100%;
    transition: 0.3s;
    height: 30%;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    border-right: solid gray 1px;
    border-top: solid gray 1px;
    border-bottom: solid gray 1px;
    :hover {
        transform: scaleX(1.05);
    }
`

const Text = styled.h3`
    font-family: 'Forum', cursive;
    font-size: 30px;
    color: black;  
    margin-left: 6px;
    user-select: none; 
`

const SideNavbar = ({setChoice}) => {
    return (
        <div style={{
            width: '25%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Item onClick={() => setChoice(1)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Vegetables</Text>
            </Item>
            <Item onClick={() => setChoice(2)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Fruits</Text>
            </Item>
            <Item onClick={() => setChoice(3)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Frozen Veg</Text>
            </Item>
            <Item onClick={() => setChoice(4)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Exotic</Text>
            </Item>
            <Item onClick={() => setChoice(5)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Organic</Text>
            </Item>
            <Item onClick={() => setChoice(6)}>
                <img src="https://imgur.com/bN9PYdW.png" />
                <Text>Freshly Cut</Text>
            </Item>
        </div>
    )
}

export default SideNavbar;