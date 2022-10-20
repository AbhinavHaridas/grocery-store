import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  transition: 0.4s ease-in-out;
  width: 4.8vh;
  height: 4.8vh;
  border-radius: 2.4vh;
  background-color: #6ff06f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: darkgreen;
  }
`;

const TextC = styled.p`
font-family: 'Forum', cursive; 
font-size: 2.65vh;
color: black;  
margin-right: 1vh;
`;

const TextP = styled.p`
font-family: 'Forum', cursive; 
font-size: 3vh;
color: black;  
`;

const CardBackground = styled.div`
margin-bottom: 2vh;
margin-left: 2vh;
transition: 0.3s;
width: 34vh;
height: 42vh;
border-radius: 10px;
background-color: white;
border: solid gray 1px
`;

const InsideCard = ({name, image, weight, price}) => {
    const [item, setItem] = useState(1);

    return (
        <div style={{height: '40vh'}}>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src={image} 
                style={{ width: '20vh', height: '16.5vh', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP style={{marginLeft: '1vh', height: '8%'}}>{name}</TextP>
            <TextC style={{marginLeft: '1vh', height: '2%'}}>{weight * item}g</TextC>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: '2.2vh'
                }}>
                <TextP style={{marginLeft: '1vh'}}>${price * item}</TextP>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <TextC>{item}</TextC>
                    <Button onClick={() => setItem(item + 1)}>
                        <i class="fa-solid fa-plus"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const Card = (props) => {
    return (
        <CardBackground>
            <InsideCard name={props.name} image={props.image} weight={props.weight} price={props.price}/>
        </CardBackground>
    )
}
