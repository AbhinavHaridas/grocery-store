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
`;

const P = styled.p`
  font-family: "Forum", cursive;
  font-size: 16px;
  padding: 10px 12px;
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
      {searchItem !== "" && (
        <MappedContainer>
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
      )
      }
    </nav>
  );
};

export default SearchNavbar;
