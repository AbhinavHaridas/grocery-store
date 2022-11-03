import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import components here
import { Model } from "./Modalordersummary";

// Import images here

const OrderType = styled.p`
  font-size: 30px;
  margin: 0;
  padding-bottom: 20px;
`;

const OrderComponentWrap = styled.div`
  margin-top: 3%;
`;

const OrderDetails = styled.div`
  padding: 20px 0px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;

const SectionA = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionB = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
`;

const Id = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Cost = styled.p`
  font-size: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  height: 50px;
  width: 300px;
  border: none;
  font-size: 24px;
  font-family: "Forum", cursive;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    transform: scale(0.95);
    color: black;
    background: white;
  }
  color: #fff;
`;

const Callmodal = ({ summaryClick, setSummaryClick }) => {
  if (summaryClick) {
    return <Model open={summaryClick} setOpen={setSummaryClick} />;
  }
}; 


const OrderComponent = ({ type, color, cost, time, date, quantity, text }) => {
  const [summaryClick, setSummaryClick] = React.useState(false);
  const navigate = useNavigate();
  return (
    <OrderComponentWrap>
      <OrderType>{type}</OrderType>
      <OrderDetails>
        <SectionA>
          <Id>Order Id: WER23SSD</Id>
          <Id style={{ color: "#8E8C8C" }}>
            {time} | {date}
          </Id>
          <Id style={{ color: "#8E8C8C" }}>No. of Items: {quantity}</Id>
        </SectionA>
        <SectionB>
          <Id>Delivery Address:</Id>
          <Id style={{ color: "#8E8C8C" }}>
            MICL,Opposite Vikhroli Station, Mumbai-400050
          </Id>
        </SectionB>
        <Cost>₹ {cost}</Cost>
        <ButtonWrap>
          {text === "Track Your Order" && (
            <Button style={{ backgroundColor: `${color}` }} onClick={() => {
              navigate("/trackorder",{replace:true});
            }}>{text}</Button>
          )}
          {text === "Re-Order" && (
            <Button style={{ backgroundColor: `${color}` }} onClick={() => {
              navigate("/cart",{replace:true});
            }}>{text}</Button>
          )}
          <Button
            style={{ backgroundColor: "#72DB4E", marginTop: "20px" }}
            onClick={() => setSummaryClick(true)}
          >
            View Order Summary
          </Button>
        </ButtonWrap>
      </OrderDetails>
      <Callmodal
        summaryClick={summaryClick}
        setSummaryClick={setSummaryClick}
      />
    </OrderComponentWrap>
  );
};

export default OrderComponent;
