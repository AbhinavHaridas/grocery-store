import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import styled from "styled-components";

const items = [
  "vegetables",
  "fruits",
  "household appliances",
  "dairy",
  "medicine",
  "canned food",
  "meat",
  "fish",
  "bakery",
  "beverages",
  "snacks",
  "spices",
  "sauces",
  "condiments",
  "pasta",
  "rice",
  "noodles",
  "cereals",
  "oils",
  "sugar",
  "flour",
  "baking",
  "juice",
  "soda",
  "chips",
];

// function SearchList({ filteredPersons }) {
//     const filtered = filteredPersons.map(items => i);
//     return (
//       <div>
//         {filtered}
//       </div>
//     );
// }

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
  ::placeholder {
    font-family: "Forum", cursive;
    font-size: 16px;
  }
  padding: 17px 20px 17px 35px;
`;

const MappedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 38%;
  z-index: 1;
  border-right: 1px solid rgb(68, 66, 66);
  border-left: 1px solid rgb(68, 66, 66);
  border-bottom: 1px solid rgb(68, 66, 66);
  background: white;
  top: 65%;
  width: 15%;
`;

const Mapped = styled.div`
  background-color: #fff;
  :hover {
    cursor: pointer;
    background-color: #aba69a45;
  }
`;

const P = styled.p`
  font-family: "Forum", cursive;
  font-size: 16px;
  padding: 10px 12px;
`;

const SearchNavbar = ({ customerId,setIsSelected, isSelected }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <nav className="main" style={{ position: "relative" }}>
      <ul className="navbar">
        <li>
          <div className="logo">
            <Link to="/home" className="link">
              <i
                class="fa-solid fa-utensils fa-2xl"
                style={{ color: "white" }}
              />
            </Link>
          </div>
        </li>
        <li>
          <Input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
            onClick={() => {
              setIsSelected(true);
            }}
          />
        </li>
        <li>
          <Link to="/category" state={{customer_id:customerId}}>
            <h3>Categories</h3>
          </Link>
        </li>
        <li>
          <Link to="/offers">
          <h3>Offers</h3>
          </Link>
        </li>
        <li>
          <Link to="/yourorder" state={{customer_id:customerId}}>
            <h3>Orders</h3>
          </Link>
        </li>
        <li>
          <div className="cart">
            <Link to="/cart" state={{customer_id:customerId}}>
            <i
              class="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: "white" }}
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/dashboard">
              <i class="fa-solid fa-chart-simple fa-2xl" style={{ color: "white" }}></i>
            </Link>
          </div>
        </li>
      </ul>
      {searchItem !== "" && isSelected && (
        <MappedContainer style={{ height: 200, overflowY: "scroll" }}>
          {items
            .filter((val) => {
              if (val.toLowerCase().includes(searchItem.toLowerCase())) {
                return val;
              }
            })
            .map((item) => {
              return (
                <Mapped>
                  <P>{item}</P>
                </Mapped>
              );
            })}
        </MappedContainer>
      )}
    </nav>
  );
};

export default SearchNavbar;
