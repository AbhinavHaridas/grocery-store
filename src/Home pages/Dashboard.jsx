import React from "react";

import styled from "styled-components";

// Import Components here
import SearchNavbar from "./Components/SearchNavbar";
import DashboardComponent from "./Components/DashboardComponent";

// Import Images here
import inventory from "./images/inventory_2.png";
import items from "./images/category.png";
import users from "./images/account_circle.png";
import earnings from "./images/attach_money.png";
import profit from "./images/auto_graph.png";
import { useLocation } from "react-router-dom";

const Heading = styled.p`
  font-family: "Forum", cursive;
  font-size: 64px;
  font-weight: 400;
  text-align: center;
  margin: 1%;
`;

const DasboardWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4%;
`;

const TableWrap = styled.div`
  padding: 2% 3%;
`;

const Table = styled.table`
  font-family: "Forum", cursive;
  width: 100%;
  border-collapse: collapse;
  margin-top: 4%;
  align-content: center;
  width: 100%;
`;

const Th = styled.th`
  padding: 1% 0%;
`;

const Tr = styled.tr``;

const Td = styled.td`
  border: 1px solid black;
  background-color: #ebeaea;
  font-weight: 400;
  font-size: 32px;
  padding: 1% 5%;
`;

const Dashboard = () => {
  const location = useLocation();
  const customerId = location.state.customer_id;

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <SearchNavbar customerId={customerId}/>
      <Heading>Welcome Admin</Heading>
      <DasboardWrap>
        <DashboardComponent
          text={"Total Inventory"}
          quantity={3305}
          image={inventory}
        />
        <DashboardComponent
          text={"Total Items Sold"}
          quantity={2000}
          image={items}
        />
        <DashboardComponent
          text={"Items Remaining"}
          quantity={1500}
          image={items}
        />
      </DasboardWrap>
      <DasboardWrap>
        <DashboardComponent
          text={"Total Earnings"}
          quantity={`$ ${500.5}`}
          image={earnings}
        />
        <DashboardComponent
          text={"Total Profit"}
          quantity={`$ ${404.45}`}
          image={profit}
        />
        <DashboardComponent text={"Total Users"} quantity={329} image={users} />
      </DasboardWrap>
      <TableWrap>
        <Table>
          <Tr>
            <Th style={{ fontSize: 30, width: "75%" }}>Most Purchased Items</Th>
            <Th style={{ fontSize: 22 }}>Ordered by (No. of Users)</Th>
          </Tr>
          <Tr>
            <Td>Tomatoes (5 Kg)</Td>
            <Td style={{ textAlign: "center" }}>45</Td>
          </Tr>
          <Tr>
            <Td>Maida (500 g)</Td>
            <Td style={{ textAlign: "center" }}>37</Td>
          </Tr>
          <Tr>
            <Td>Groundnut Oil (7 Ltr) </Td>
            <Td style={{ textAlign: "center" }}>23</Td>
          </Tr>
          <Tr>
            <Td>Wada Kolam Rice (10 Kg) </Td>
            <Td style={{ textAlign: "center" }}>10</Td>
          </Tr>
        </Table>
      </TableWrap>
    </div>
  );
};

export default Dashboard;
