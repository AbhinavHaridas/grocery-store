import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardBackground = styled.div`
    width: 30vh;
    height: 40vh;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InsideCard = () => {
    return (
        <div style={{height: '40vh'}}>
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
                <div style={{ 
                    width: '4.123711340206185vh', height: '4.123711340206185vh', 
                    borderRadius: '2.0618556701030926vh', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '1.875em',
                    textAlign: 'center'
                    }}>
                    ➔
                </div>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <CardBackground>
            <InsideCard />
        </CardBackground>
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
    height: 62vh;
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
    font-size: 1.188em;
    color: black;  
    margin-left: 4%; 
`

const sliderStyle = {
    display: "flex",
    justifyContent: "center"
}

const swiperStyle = {
    height: '47vh'
}

const Deals = () => {
    return (
        <Display>
            <Text>Top Deals: </Text>
            <Deal>
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                speed={1500}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
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
        </Deal>
    </Display>
    )
}

export default Deals;