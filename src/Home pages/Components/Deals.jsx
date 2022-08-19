import React from "react";
import styled from "styled-components";

const SliderButton = styled.div`
    width: 10vh;
    height: 10vh;
    border-radius: 5vh;
    background-color: white;
    margin-left: 10px;
`

const InsideSliderLeftButton = () => {
    return (
        <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
            {"<"}
        </h1>
    )
}

const InsideSliderRightButton = () => {
    return (
        <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
            {">"}
        </h1>
    )
}

const Card = styled.div`
    width: 30vh;
    height: 40vh;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InsideCard = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://imgur.com/xxh8Xni.png" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <div style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </div>
            </div>
        </section>
    )
}

const Deal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Display = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    background-color: rgb(12, 207, 185);
    background-size: cover;
`

const Text = styled.h3`
    font-family: 'Forum', cursive; 
    font-size: 40px;
    color: black;  
    margin-left: 4%;  
`

const TextP = styled.p`
    font-family: 'Forum', cursive; 
    font-size: 19px;
    color: black;  
    margin-left: 4%; 
`

const Deals = () => {
    return (
        <Display>
            <Text>Top Deals: </Text>
            <Deal>
                <SliderButton>
                    <InsideSliderLeftButton />
                </SliderButton>
                <Card>
                    <InsideCard />
                </Card>
                <Card>
                    <InsideCard />
                </Card>
                <Card>
                    <InsideCard />
                </Card>
                <SliderButton>
                    <InsideSliderRightButton />
                </SliderButton>
            </Deal>
        </Display>
    )
}

export default Deals;