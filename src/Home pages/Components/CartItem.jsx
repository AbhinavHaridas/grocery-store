import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
    margin-right: 20px
`

const CartItem = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            width: '130vh', 
            height: '25vh', 
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '2vh',
            borderRadius: '6px'
            }}>
                <img src='https://imgur.com/SDCKI4n.png' alt='none' />
                <div style={{
                display: 'flex', 
                flexDirection: 'column',
                width: '100%'
                }}>
                    <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    }}>
                        <TextP>Nagpur Oranges</TextP>
                        <TextP>$40.99</TextP>
                    </div>
                    <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    }}>
                        <TextC>Qty: 1</TextC>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Amount>
                            <TextC>1kg</TextC>
                            <i class="fa-solid fa-caret-down fa-2xl" style={{marginLeft: '2vh'}}></i>
                        </Amount>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <i class="fa-solid fa-trash-can fa-2xl" style={{marginTop: '1.5vh', marginRight: '4vh'}}></i>
                        <Amount>
                            <i class="fa-solid fa-plus" onClick={() => setCount(count + 1)}></i>
                            <TextC>{count}</TextC>
                            <i class="fa-solid fa-minus" onClick={() => {
                                if (count !== 0) setCount(count - 1)
                            }}></i>
                        </Amount>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default CartItem;


{/* <Amount>
    <TextC>1kg</TextC>
    <i class="fa-solid fa-caret-down fa-2xl" style={{marginLeft: '2vh'}}></i>
</Amount>

<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    marginBottom: '5vh',
    marginRight: '2vh'
    }}>
        <i class="fa-solid fa-trash-can fa-xl"></i>
</div>

<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}}>

<Amount>
                            <i class="fa-solid fa-plus" onClick={() => setCount(count + 1)}></i>
                            <TextC>{count}</TextC>
                            <i class="fa-solid fa-minus" onClick={() => {
                                if (count !== 0) setCount(count - 1)
                                }}></i>
                        </Amount>
                    </div>
                </div> */}