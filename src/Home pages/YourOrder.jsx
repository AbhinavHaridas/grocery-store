import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Import components here
import SearchNavbar from "./Components/SearchNavbar";
import OrderComponent from "./Components/YourOrderComponent";

// Import images here

const OrderWrap = styled.div`
  padding: 30px;
  font-family: "Forum", cursive;
`;

const OrderHeading = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
`;

const Order = () => {
  const location = useLocation();
  const customerId = location.state.customer_id;
  return (
    <div>
      <SearchNavbar customerId={customerId}/>
      <OrderWrap>
        <OrderHeading>Your Order History</OrderHeading>
        <OrderComponent
          type={"Pending Orders"}
          color={"#3E65EE"}
          cost={`${"450.00"}`}
          time={"12:30"}
          date={"15 Oct 2022"}
          quantity={10}
          text={"Track Your Order"}
        />
        <OrderComponent
          type={"Past Orders"}
          color={"#EE733E"}
          cost={`${"120.00"}`}
          time={"11:00"}
          date={"7 Oct 2022"}
          quantity={5}
          text={"Re-Order"}
        />
      </OrderWrap>
    </div>
  );
};

export default Order;
