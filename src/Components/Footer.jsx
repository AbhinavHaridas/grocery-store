import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Assets import here
// import twitter from "./images/twitter.png";
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";

const FooterWrap = styled.footer`
  background-color: #d1ccc0;
  font-family: "Forum", cursive;
`;
const FooterList = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 25px;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

const FooterSocialMedia = styled.div`
  width: 1536px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 1536px;
  margin-left: -40px;
`;

const LI = styled.li`
  margin: 0px 30px;
`;

const Text = styled.p`
  margin: 37px 0px 0px 0px;
  padding: 30px 0px 36px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterList>
        <UL>
          <LI>
            <Link to="/aboutus" className="link">
              <div>
                <h3>
                  <b>About Us</b>
                </h3>
              </div>
            </Link>
          </LI>
          <LI>
            <Link to="/aboutus" className="link">
              <div>
                <h3>
                  <b>Contact</b>
                </h3>
              </div>
            </Link>
          </LI>
          <LI>
            <Link to="/aboutus" className="link">
              <div>
                <h3>
                  <b>Terms</b>
                </h3>
              </div>
            </Link>
          </LI>
        </UL>
      </FooterList>
      <>
        <FooterSocialMedia>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Icon src={twitter} alt="No image" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Icon src={instagram} alt="No image" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Icon src={linkedin} alt="No image" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon src={facebook} alt="No image" />
          </a>
        </FooterSocialMedia>
        <Text>© XYZ Commerce Private Limited, 2022-2024</Text>
      </>
    </FooterWrap>
  );
};

export default Footer;
