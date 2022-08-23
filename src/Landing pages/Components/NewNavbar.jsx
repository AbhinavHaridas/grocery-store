import React,{useState} from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Modal from './Modal';


const NavbarWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  gap: 15%;
  height: 12vh;
  background: #4d514d;
`;

const ImageWrap = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;
background:#32FF7E;
position:relative;`;

const LinkWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const ListItem = styled.li`
  list-style: none;
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  
  border-left: 2px solid white;

`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  text-align: center;
`;


const TriangleDesign = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 50px;
  border-right-width: 50px;
  border-bottom-width: 110px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #32FF7E;;
  border-top: none;
  position: absolute;
  right: -50px;
`;

const NewNavbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen);


  return (
    <NavbarWrap>
      <ImageWrap>
              <i class="fa-solid fa-utensils fa-2xl" style={{ fontSize: 45, marginLeft: 30 }} />
              <TriangleDesign style={{transform:"rotate(180deg)"}} />
              <TriangleDesign />
      </ImageWrap>
          <LinkWrap>
              <UL>
                  <ListItem><Links to="" onClick={toggle}>Sign in</Links></ListItem>
                  <ListItem><Links to="/signup" onClick={toggle}>Sign up</Links></ListItem>
                  <ListItem><Links to="/aboutus" onClick={toggle}>About us</Links></ListItem>
              </UL>
      </LinkWrap>
      <Modal isOpen={isOpen} toggle={toggle} />
      </NavbarWrap>
  );
};

export default NewNavbar;
