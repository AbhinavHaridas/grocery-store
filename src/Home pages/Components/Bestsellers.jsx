import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


const CardBackground = styled.div`
    transition: 0.3s;
    width: 30vh;
    height: 40vh;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Button = styled.div`
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.4);
  }
`

const InsideCard = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://imgur.com/xxh8Xni.png" 
                style={{ width: '18.556701030927837vh', height: '15.463917525773196vh', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '3.0927835051546393vh', 
                marginBottom: '2.0618556701030926vh' 
                }}>
                <Button style={{ 
                    width: '4.123711340206185vh', height: '4.123711340206185vh', 
                    borderRadius: '2.0618556701030926vh', 
                    backgroundColor: 'orange', 
                    fontSize: '3.1023784901758016vh',
                    textAlign: 'center',
                    userSelect: 'none'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}

const Card = () => {
    const [hover, setHover] = useState(false);  

    let styleHover = {
        transition: '0.2s'
    }

    const hoverer = () => {
        setHover(!hover);
    }

    if (hover) {
        styleHover = {
            transform: 'scale(1.03)',
            boxShadow: 'rgba(0, 0, 0, 0.35) 1px 15px 25px',
        }
    }

    return (
        <CardBackground onMouseEnter={hoverer} onMouseLeave={hoverer} style={styleHover}>
            <InsideCard />
        </CardBackground>
    )
}



const BestSeller = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Display = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 62vh;
    max-height: 70vh;
    background-color: rgb(224, 167, 59);
    background-size: cover;
    user-select: none; 
`

const Text = styled.h3`
    font-family: 'Forum', cursive; 
    font-size: 40px;
    color: black;  
    margin-left: 4%;  
    user-select: none;
`

const TextP = styled.p`
    font-family: 'Forum', cursive; 
    font-size: 1.958762886597938vh;
    color: black;  
    margin-left: 4%; 
`

const sliderStyle = {
    display: "flex",
    justifyContent: "center"
}

const swiperStyle = {
    height: '47vh', 
    transition: '2s', 
    padding: '12px'
}

const Bestsellers = () => {
    return (
        <Display>
            <Text>Bestsellers: </Text>
            <BestSeller>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    speed={1500}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={swiperStyle}
                    >
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                        <SwiperSlide style={sliderStyle}><Card /></SwiperSlide>
                    </Swiper>
            </BestSeller>
        </Display> 
    )
}

export default Bestsellers;