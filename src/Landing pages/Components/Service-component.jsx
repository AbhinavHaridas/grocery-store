import React from "react";
import styled from "styled-components";
import image from "../images/ServiceImage.jpg";

const ServiceWrap = styled.div`
  height: 550px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr repeat(2, 1fr);
  font-family: "Forum", cursive;
  padding: 30px;
  background-color: #e8e7e7;
  margin-top: -3.5px;
`;

const Heading = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const ServiceImageWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceImage = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 194px;
  width: 322px;
`;

const ServiceImageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Service = () => {
  return (
    <ServiceWrap>
      <Heading>
        <h1 style={{ margin: 0 }}>Our Services</h1>
      </Heading>
      <ServiceImageWrap>
        <ServiceImage />
      </ServiceImageWrap>
      <ServiceImageText>
        <h3 style={{ width: "75%", color: "black" }}>
          What began little, with a solitary idea of a store that provides a
          rebate and the basic thought of moving more for less, has become in
          the course of the last 40 years into the biggest retailer in this
          whole country.
        </h3>
      </ServiceImageText>
      <ServiceImageText>
        <h3 style={{ width: "75%", color: "black" }}>
          Our store keeps on being an innovator in supportability, corporate
          magnanimity, and work opportunity. It’s everything part of our
          relentless promise to make openings and convey an incentive to clients
          and networks the world over.
        </h3>
      </ServiceImageText>
      <ServiceImageWrap>
        <ServiceImage />
      </ServiceImageWrap>
    </ServiceWrap>
  );
};

export default Service;
