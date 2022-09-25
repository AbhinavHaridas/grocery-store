import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import AMOUNT from "./AMOUNT";

const TextC = styled.p`
font-family: 'Forum', cursive; 
font-size: 2.2vh;
color: black;  
margin-left: 4%; 
`;

const TextP = styled.p`
font-family: 'Forum', cursive; 
font-size: 3vh;
color: black;  
margin-left: 20px;
margin-right: 20px
`;

const Amount = styled.div`
    padding: 6px;
    background-color: rgb(179, 173, 173);
    width: 10vh;
    height: 3.5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.8vh;
    margin-left: 20px;
    margin-right: 20px;
`

const CartItem = () => {
    const [count, setCount] = useState(1);
    const [open, setOpen] = useState(false); 
    const [index, setIndex] = useState(0);

    if (count > 0) {
        return (
        <div style={{
            width: '110vh',
            height: '20vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '2vh',
            borderRadius: '6px',
            transtion: '0.2s',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            }}>
                <img src='https://imgur.com/SDCKI4n.png' alt='none' style={{height: '20vh', alignSelf: 'center'}} />
                <div style={{
                display: 'flex', 
                flexDirection: 'column',
                width: '100%'
                }}>
                    <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '6vh',
                    justifyContent: 'space-between',
                    width: '100%',
                    }}>
                        <TextP>Nagpur Oranges</TextP>
                        <TextP>$40.99</TextP>
                    </div>
                    <div style={{
                    display: 'flex',
                    marginTop: '1vh',
                    height: '4vh',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    paddingTop: '0vh'
                    }}>
                        <TextC>Qty: 1</TextC>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '1vh',
                        height: '10vh',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Amount>
                            <TextC>{AMOUNT[index]}</TextC>
                            <i class="fa-solid fa-caret-down fa-2xl" 
                            style={{marginLeft: '2vh', position: 'relative'}} onClick={() => setOpen(!open)} />
                        </Amount>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <i class="fa-solid fa-trash-can fa-2xl" 
                        style={{marginTop: '1.5vh', 
                        marginRight: '4vh',
                        cursor: 'pointer'}}
                        onClick={() => setCount(0)} />
                        <Amount>
                            <i class="fa-solid fa-plus" onClick={() => setCount(count + 1)}></i>
                            <TextC>{count}</TextC>
                            <i class="fa-solid fa-minus" onClick={() => {
                                if (count !== 0) setCount(count - 1)
                            }}></i>
                        </Amount>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'start', 
                        marginTop: '2vh', 
                        marginBottom: '0vh'}}>
                            <Dropdown open={open} setIndex={setIndex}/>
                    </div>
                </div>
        </div>
    )
    }
 
}

export default CartItem;
