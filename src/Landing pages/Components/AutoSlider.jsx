import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import sliderImage1 from "../images/slider-img-1.jpeg";
// import sliderImage2 from "../images/slider-img-2.jpeg";
// import sliderImage3 from "../images/slider-img-3.jpeg";
// import sliderImage4 from "../images/slider-img-4.jpeg";
import sliderImage1 from "../images/sliderImage1.jpg";
import sliderImage2 from "../images/sliderImage2.jpg";
import sliderImage3 from "../images/sliderImage3.jpg";
import sliderImage4 from "../images/sliderImage4.jpg";

/* Array of images used for slider */
const sliderImages = [
  {
    img:sliderImage1,
    text: "Fresh groceries delivered right to your doorstep"
  },
  {
    img:"https://thumbs.dreamstime.com/b/shopping-basket-grocery-products-white-background-promotional-sale-banner-vector-illustration-196386385.jpg",
    text:"Hassle-free payment and delivery"
  },
  {
    img:"https://thumbs.dreamstime.com/b/shopping-basket-grocery-products-white-background-promotional-sale-banner-vector-illustration-196386385.jpg",
    text:"Customer-oriented services guarenteed"
  },
  {
    img:"https://thumbs.dreamstime.com/b/shopping-basket-grocery-products-white-background-promotional-sale-banner-vector-illustration-196386385.jpg",
    text:"Better Ingredients, Better food and beverages at a low price"
  },
];

/* Slideshow container  */
const SlideshowSlider = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  transition: ease 3s;
`;

/* Slideshow Image  */
const AutoSliderWrap = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  whitespace: nowrap;
`;

const AutoSlider = () => {
  /* sets the index of the current image on the screen */
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    /* sets the interval for the slideshow */
    const interval = setInterval(() => {
      /* When index reaches the end of array it restarts the process */
      if (currentImage === sliderImages.length - 1) {
        setCurrentImage(0);
      } else {
      /* else it increments the index */
        setCurrentImage(currentImage + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    /* Index is updated to move the slider accordingly */
    <SlideshowSlider
      style={{ transform: `translate(-${currentImage * 100}%,0)` }}
    >
      {/* Images array is mapped and images are placed onto the slider */
      sliderImages.map((image, index) => {
        return <AutoSliderWrap key={index} img={image.img} />;
      })}
    </SlideshowSlider>
  );
};

export default AutoSlider;
