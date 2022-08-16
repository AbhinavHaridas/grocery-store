import { React,useEffect,useState} from 'react'
import styled from 'styled-components';
import sliderImage1 from '../Landing pages/images/slider-img-1.jpg';
import sliderImage2 from '../Landing pages/images/slider-img-2.jpg';
import sliderImage3 from '../Landing pages/images/slider-img-3.png';
import sliderImage4 from '../Landing pages/images/slider-img-4.png';

/* Array of images used for slider */
const sliderImages = [
  {
    img: sliderImage1,
  },
  {
    img: sliderImage2,
  },
  {
    img: sliderImage3,
},
{
    img: sliderImage4,
  }
];

/* Slideshow container  */
const SlideshowSlider = styled.div`
  width: 100%;
  height: 81.5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  transition: ease 2s;
`;

/* Slideshow Image  */
const AutoSliderWrap = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
            }
            /* else it increments the index */
            else
            {
                setCurrentImage(currentImage + 1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        /* Index is updated to move the slider accordingly */
        <SlideshowSlider style={{transform:`translate(-${currentImage*100}%,0)`}}>
            {
                /* Images array is mapped and images are placed onto the slider */
                sliderImages.map((image, index) => {
                    return (
                        <AutoSliderWrap key={index} img={image.img}/>
                        
                    )
                })
            }

        </SlideshowSlider>

  )
}

export default AutoSlider;