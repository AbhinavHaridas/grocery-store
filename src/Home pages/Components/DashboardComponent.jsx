import React from "react";
import styled from "styled-components";

// Import Components here

// Import Images here

const DashboardItemWrap = styled.div`
  background-color: #4776e6;
  font-family: "Forum", cursive;
  padding: 28px 38px;
  width: 303px;
  border-radius: 25px;
`;

const DashboardTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const DashboardTitle = styled.p`
  font-size: 32px;
  color: white;
  margin: 0;
  margin-right: 4%;
`;

const Quantity = styled.p`
  font-size: 48px;
  color: white;
  margin-top: 16px;
  margin-bottom: 0;
`;

const DashboardComponent = ({ text, quantity, image }) => {
  return (
    <div>
      <DashboardItemWrap>
        <DashboardTitleWrap>
          <DashboardTitle>{text}</DashboardTitle>
          <span>
            <img src={image} alt="" />
          </span>
        </DashboardTitleWrap>
        <Quantity>{quantity}</Quantity>
      </DashboardItemWrap>
    </div>
  );
};

export default DashboardComponent;
