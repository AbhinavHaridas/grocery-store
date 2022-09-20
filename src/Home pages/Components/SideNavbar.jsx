import React from "react";
import styled from "styled-components";

const Item = styled.div`
    width: 100%;
    transition: 0.3s;
    height: 13.6%;
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

const scrollBehaviour = {
    top: 0,
    left: 0,
    behavior: 'smooth'
}

const SideNavbar = ({setChoice}) => {
    return (
        <div style={{
            width: '23%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: "fixed",
            left: "0%",
            top: "15%"
        }}>
            <Item onClick={() => { setChoice(1); window.scrollTo(scrollBehaviour);}}>
                <img src="https://imgur.com/bN9PYdW.png"  />
                <Text>Vegetables</Text>
            </Item>
            <Item onClick={() => {setChoice(2); window.scrollTo(0,0);}}>
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