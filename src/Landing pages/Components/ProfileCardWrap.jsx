import React from "react";
import styled from "styled-components";
import image from "../images/ProfilePicture.jpg";
import twitter from "../images/twitter.png";
// import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png"

const ProfileCardWrap = styled.div`
  display: flex;
  padding: 30px 45px 39px;
  background-color: #fff;
  width: 13%;
  border-radius: 15px;
  margin: 100px 53px 100px 36px;
`;

const ProfileCard = styled.div``;

const Image = styled.img``;

const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.h4`
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  margin: 35px 0px;
`;

const Icon = styled.img`
  height: 25px;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

const Wrap = ({ text }) => {
  return (
    <ProfileCardWrap>
      <ProfileCard>
        <Image src={image} alt="No image" height={200} />
        <Text>{text}</Text>
        <SocialMediaWrap>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Icon src={twitter} alt="No image" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Icon src={linkedin} alt="No image" />
          </a>
        </SocialMediaWrap>
      </ProfileCard>
    </ProfileCardWrap>
  );
};

export default Wrap;
