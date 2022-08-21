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

const Card1 = styled.div`
    width: 40vh;
    height: 370px;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InsideCard1 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://imgur.com/Dn1j1Vu.jpeg" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                Vegetables</center>
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

const Card2 = styled.div`
    width: 40vh;
    height: 370px;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const InsideCard2 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://imgur.com/bcfZTTj.jpeg" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                Fruits</center>
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

const Card3 = styled.div`
    width: 40vh;
    height: 370px;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const InsideCard3 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://imgur.com/wy14F0R.png" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                Home appliances</center>
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

const Slide = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Display = styled.div`
background-image: url("https://i.imgur.com/9yLXljr.jpeg");
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
`


const TextP = styled.p`
    font-family: 'Forum', cursive; 
    font-size: 22px;
    color: black;  
    margin-left: 4%; 
`

const Slider = () => {
    return (
        <Display>

            <Slide>
                <SliderButton>
                    <InsideSliderLeftButton />
                </SliderButton>
                <Card1>
                    <InsideCard1 />
                </Card1>
                <Card2>
                    <InsideCard2 />
                </Card2>
                <Card3>
                    <InsideCard3 />
                </Card3>
                <SliderButton>
                    <InsideSliderRightButton />
                </SliderButton>
                </Slide>
        </Display>
    )
}

export default Slider;