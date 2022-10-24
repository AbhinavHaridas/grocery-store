import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation,Pagination } from "swiper";

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
            <img src="https://media.istockphoto.com/photos/vegetables-on-display-and-for-sale-at-farmers-market-picture-id601013136?k=20&m=601013136&s=612x612&w=0&h=YyUJvQIMeELjRpxXLjqCvVLRI83YiwYzrFooQhg_AJc=" 
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
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}


const InsideCard2 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://media.istockphoto.com/photos/fruit-background-picture-id529664572?k=20&m=529664572&s=612x612&w=0&h=UPKnmT4wmX8KB_nke3R0Y6mH_syPYn7KTKFFYLJEJ8U=" 
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
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}


const InsideCard3 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://media.istockphoto.com/photos/milk-eggs-and-bread-on-the-wooden-table-with-copy-space-for-text-picture-id983901002?k=20&m=983901002&s=612x612&w=0&h=FVrImLjYqf0oOEgwc2L3WDguKQe7gR5KCs_fdgRzPP0=" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
            Daily Essentials</center>
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}

const InsideCard4 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://media.istockphoto.com/photos/mix-of-chips-snacks-and-crackers-on-a-wooden-stand-unhealthy-food-picture-id1282580120?k=20&m=1282580120&s=612x612&w=0&h=vZEFCT0pAj0jnhtbLQXFAB2vlllndqE7q5w-PuAc72E=" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
            Instant Food</center>
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}

const InsideCard5 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2012/9/11/3/RX-HGMAG005_Clean-House-Confessions-034-e_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1400977682672.jpeg" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                Cleaning Essentials</center>
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
            </div>
        </section>
    )
}

const InsideCard6 = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://media.istockphoto.com/photos/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit-picture-id584574708?k=20&m=584574708&s=612x612&w=0&h=3BpY_ojs0Gm-d5CkFNADt0A-N68yLIO1By7gc2xNknI=" 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                Personal Care Products</center>
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}>
                    ➔
                </Button>
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
const Card4 = () => {
    return <Cardbackground>
            <InsideCard4 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}
const Card5 = () => {
    return <Cardbackground>
            <InsideCard5 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}
const Card6 = () => {
    return <Cardbackground>
            <InsideCard6 style={{
                height:"70vh"
            }

            }/>
            </Cardbackground>
}

const Button = styled.div`
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.4);
  }
`

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
    justifyContent: "center",
    alignItems:"center",
};

const swiperStyle = {
    height: '70vh',
    width:"100%",
};

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
                    <SwiperSlide style={sliderStyle}><Card3/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card4/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card5/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card6/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card1 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card2 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card3/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card4/></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card5 /></SwiperSlide>
                    <SwiperSlide style={sliderStyle}><Card6 /></SwiperSlide>
                    
                </Swiper>
                </Slide>
        </Display>
    )
}

export default Slider;

