import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "../../Home pages/Home";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgb(35 35 35 / 40%);
  backdrop-filter: blur(5px);
  z-index: 2;
`;

/*   background-color: rgb(186 186 186 / 40%);
  backdrop-filter: blur(3px); */

const ModalContent = styled.div`
  height: 80%;
  width: 35%;
  position: absolute;
  top: 10%;
  left: 32.5%;
  background: #373a37;
  border-radius: 30.5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-shadow: 1px 1px 15px 3px #292828;
  z-index: 2;
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
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-top: none;
  position: absolute;
`;

const FormWrap = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  color: #4df731;
`;

const Form = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  bottom: 5%;
  gap: 5px;
`;

const Input = styled.input`
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 15px;
  height: 10%;
  margin-bottom: 15px;
  padding: 5px;
`;

const Label = styled.label`
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 28px;
  text-align: left;

  color: #ffffff;
`;

const LoginButton = styled.button`
  font-family: "Forum";
  font-style: normal;
  background:white;
  font-weight: 400;
  font-size: 25px;
  padding: 10px;
  width: 50%;
  align-self: center;
  margin-top: 20px;
  border-radius: 10px;
  cursor:pointer;
  transition: 0.3s ease-in-out;
  :hover,
  focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    background-color: #4DF631;
  }
`;

const Text = styled.h1`
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;

  color: #4df631;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 5%;
  width: 66%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  align-self: center;
`;

const Modal = ({ isOpen, toggle }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [submit, setSubmit] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/customers/", { mode: 'cors' })
    .then(response => response.json())
    .then(json => {
      setJsonData(json)
    });
  }, []);
  
  const Login = () => {
    if (submit) {
      for (const user of jsonData) {
        if (user?.contact === phoneNumber && user?.password === password) {
            return navigate('/home');
        }
      }
    }
    return null;
  }
  
  return (
    isOpen && (
      <>
        <ModalOverlay onClick={toggle}></ModalOverlay>
        <ModalContent>
          <TriangleDesign
            style={{ transform: "rotate(140deg)", top: -5, left: -6 }}
          />
          <TriangleDesign
            style={{ transform: "rotate(215deg)", top: -5, right: -6 }}
          />
          <TriangleDesign
            style={{ transform: "rotate(320deg)", bottom: -5, right: -6 }}
          />
          <TriangleDesign
            style={{ transform: "rotate(45deg)", bottom: -5, left: -6 }}
          />
          <FormWrap>
            <Title>Welcome Back.</Title>
            <Form>
              <Label htmlFor="">Enter Phone No.</Label>
              <Input
                type="tel"
                value={phoneNumber}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
              />
              <Label htmlFor="">Enter Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LoginButton onClick={() => setSubmit(true)}>Submit</LoginButton >
              {
                Login()
              }
            </Form>
            <StyledLink to="/home">
              <Text>Forgot Password? Click Here</Text>
            </StyledLink>
          </FormWrap>
        </ModalContent>
      </>
    )
  );
};

export default Modal;
