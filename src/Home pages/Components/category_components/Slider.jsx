import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation,Pagination } from "swiper";

const SliderButton = styled.div`
    width: 10vh;
    height: 10vh;
    border-radius: 5vh;
    background-color: white;
    margin-left: 10px;
`

// const InsideSliderLeftButton = () => {
//     return (
//         <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
//             {"<"}
//         </h1>
//     )
// }

// const InsideSliderRightButton = () => {
//     return (
//         <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
//             {">"}
//         </h1>
//     )
// }

const Cardbackground = styled.div`
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

const Card1 = () => {
    return <Cardbackground>
            <InsideCard1 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}
const Card2 = () => {
    return <Cardbackground>
            <InsideCard2 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}
const Card3 = () => {
    return <Cardbackground>
            <InsideCard3 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}

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
const sliderStyle = {
    display: "flex",
    justifyContent: "center"
}

const swiperStyle = {
    height: '70vh',
    width : "30%",
    alignItems:"center"
}

const Slider = () => {
    return (
        <Display>

                <Slide>
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
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
                    <SwiperSlide style={sliderStyle}><Card1/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card2/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card3 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card1 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card2/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card3/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card1 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card2 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card3/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card1/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card2 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card3 /></SwiperSlide>
                    
                </Swiper>
                </Slide>
        </Display>
    )
}

export default Slider;

