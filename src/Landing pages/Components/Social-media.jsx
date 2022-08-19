import React from "react";
import styled from "styled-components";

// Assets import here
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";

const Icon = styled.img`
  height: 25px;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  :hover {
    transform: rotate(360deg) scale(1.6);
  }
`;

const FooterSocialMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;
