import React from "react";
import LandingNavbar from "../Components/LandingNavbar";
import styled from "styled-components";

// Assets import here
import image from "./images/ServiceHero.jpg";

// Components import here
import Footer from "../Components/Footer";
import Team from "../Components/Team-component";
import Service from "../Components/Service-component";

const Hero = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.text`
  font-family: "Forum", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 77px;
  text-align: center;
  color: black;
  color: #ffffff;
  position: absolute;
  top: 35%;
  left: 23%;
  z-index: 1;
  width: 55%;
`;

const AboutUs = () => {
  return (
    <div>
      <LandingNavbar />
      <Hero>
        <Image src={image} alt="No image" />
        <Text>Learn more about us and our goal for a better tommorrow </Text>
      </Hero>
      <Service />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutUs;
