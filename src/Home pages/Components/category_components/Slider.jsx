import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation,Pagination } from "swiper";
import { useState } from "react";

const Cardbackground = styled.div`
    width: 40vh;
    height: 370px;
    border-radius: 20px;
    background-color: white;
    margin-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InsideCard = ({ title, image, id }) => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src={image} 
                style={{ width: '180px', height: '150px', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP><center>
                {title}</center>
            </TextP>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'end', 
                marginRight: '30px', 
                marginBottom: '20px' 
                }}>
                <Link to={id}><Button style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgb(12, 207, 185)', 
                    fontSize: '30px',
                    textAlign: 'center'
                    }}
                    >
                    ➔
                </Button></Link>
            </div>
        </section>
    )
}

const Card = (props) => {
    return <Cardbackground>
            <InsideCard title={props.title} image={props.image} id={props.id} />
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
    const [jsonData, setJsonData] = useState(null);
    const [scrollState, setScrollState] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/categories/fetch_category_types", {mode: 'cors'})
        .then(response => response.json())
        .then(json => setJsonData(json));
    }, [])

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
                        {
                            jsonData?.map((category) => {
                                return <SwiperSlide style={sliderStyle}><Card title={category.title} image={category.image} id={category.id} /></SwiperSlide>
                            })
                        }  
                </Swiper>
                </Slide>
        </Display>
    )
}

export default Slider;

