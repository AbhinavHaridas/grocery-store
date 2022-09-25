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

const Mapped = styled.div`
  margin: 40px;
  background-color: #fff;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-family: "Forum", cursive;
  font-size: 16px;
  margin-top: -40px;
  margin-bottom: -40px;
  padding: 10px 12px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const SearchNavbar = () => {
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
        <li></li>
        <li>
          <Link to="/category">
            <h3>Categories</h3>
          </Link>
        </li>
        <li>
          <Input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
        </li>

        <li>
          <h3>Offers</h3>
        </li>
        <li>
          <h3>
            <b>Orders</b>
          </h3>
        </li>
        <li>
          <div className="cart">
            <i
              class="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: "white" }}
            />
          </div>
        </li>
        <li>
          <div className="dropdown">
            <i class="fa-thin fa-bars fa" style={{ color: "white" }}></i>
          </div>
        </li>
      </ul>
      {items
        .filter((val) => {
          if (searchItem == "") {
            return val;
          } else if (val.toLowerCase().includes(searchItem.toLowerCase())) {
            return val;
          }
        })
        .map((item) => {
          return (
            <Mapped
              style={{
                display: searchItem != "" ? "block" : "none",
              }}
            >
              <P>{item}</P>
            </Mapped>
          );
        })}
    </nav>
  );
};

export default SearchNavbar;
