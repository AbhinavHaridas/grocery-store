import React from "react";
import styled from "styled-components";

// Import components here
import SocialMedia from "./Social-media";

const FooterWrap = styled.footer`
  background-color: #d1ccc0;
  font-family: "Forum", cursive;
`;
const FooterList = styled.div`
  display: flex;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
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

const A = styled.a`
  text-decoration: none;
  color: black;
  position: relative;
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.4s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterList>
        <UL>
          <LI>
            <A href="/aboutus">
              <div>
                <h3 style={{ color: "black" }}>
                  <b>About Us</b>
                </h3>
              </div>
            </A>
          </LI>
          <LI>
            <A href="/contact">
              <div>
                <h3 style={{ color: "black" }}>
                  <b>Contact</b>
                </h3>
              </div>
            </A>
          </LI>
          <LI>
            <A href="/terms">
              <div>
                <h3 style={{ color: "black" }}>
                  <b>Terms</b>
                </h3>
              </div>
            </A>
          </LI>
        </UL>
      </FooterList>
      <>
        <SocialMedia />
        <Text>© XYZ Commerce Private Limited, 2022-2024</Text>
      </>
    </FooterWrap>
  );
};

export default Footer;
