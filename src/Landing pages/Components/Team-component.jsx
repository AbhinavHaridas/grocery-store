import React from "react";
import styled from "styled-components";

// Import components here
import Wrap from "./ProfileCardWrap"

const TeamSection = styled.div`
  font-family: "Forum", cursive;
  padding: 30px;
  background-color: #dedbdb; 
`;

const Heading = styled.div``;

const WrapSection = styled.div`
  display: flex;
`;

const Team = () => {
  return (
    <TeamSection>
      <Heading>
        <h1 style={{ margin: 0 }}>Our Team:</h1>
      </Heading>
      <WrapSection>
        <Wrap text={"Abhinav Haridas"} />
        <Wrap text={"Himnish Israni"} />
        <Wrap text={"Kaushal Poojary"} />
        <Wrap text={"Shaun Dsouza"} />
      </WrapSection>
    </TeamSection>
  );
};

export default Team;
