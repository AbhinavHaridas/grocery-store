import React from "react";
import { useState, useEffect } from "react";
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

const SideNavbar = ({ setChoice, categories }) => { 

    return (
        <div style={{
            width: '23%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: "fixed",
            left: "0%",
            top: "17%"
        }}>
            {/* <Item onClick={() =>  setChoice(1)}>
                <img src="https://imgur.com/bN9PYdW.png"  alt="Vegetables"/>
                <Text>Vegetables</Text>
            </Item>
            <Item onClick={() => setChoice(2)}>
                <img src="https://imgur.com/bN9PYdW.png" alt="Fruits"/>
                <Text>Fruits</Text>
            </Item>
            <Item onClick={() =>  setChoice(3)}>
                <img src="https://imgur.com/bN9PYdW.png" alt="Frozen Veg"/>
                <Text>Frozen Veg</Text>
            </Item>
            <Item onClick={() => setChoice(4)}>
                <img src="https://imgur.com/bN9PYdW.png" alt="Exotic"/>
                <Text>Exotic</Text>
            </Item>
            <Item onClick={() => setChoice(5)}>
                <img src="https://imgur.com/bN9PYdW.png" alt="Organic"/>
                <Text>Organic</Text>
            </Item>
            <Item onClick={() => setChoice(6)}>
                <img src="https://imgur.com/bN9PYdW.png" alt="Freshly Cut"/>
                <Text>Freshly Cut</Text>
            </Item> */}
            {
                categories?.map((category) => {
                    return <Item onClick={() => setChoice(category.id)}>
                        <img src={category.image} alt={category.title} />
                        <Text>{category.title}</Text>
                    </Item>
                })
            }
        </div>
    )
}

export default SideNavbar;