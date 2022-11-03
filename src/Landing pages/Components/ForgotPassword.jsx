import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../LandingStyles/LandingStyle.css';

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
  height: 3.5vh;
  margin-bottom: 15px;
  padding: 5px;
  width: 400px;
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

const Button = styled.button`
  font-family: "Forum";
  font-style: normal;
  background:white;
  font-weight: 400;
  font-size: 25px;
  padding: 10px;
  width: 25vh;
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

const ForgotPassword = ({ forgotPassword, isPasswordForgotten }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const generateOTP = (e) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("contact", phoneNumber);

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/otps/generate_new_otp", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const validateOTP = (e) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("contact", phoneNumber);
    urlencoded.append("otp", otp);

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/otps/validate_otp", requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json === "OTP validated successfully") generatePassword(e);
        else alert("Incorrect OTP");
      })
      .catch(error => console.log('error', error));
  }

  const generatePassword = (e) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("contact", phoneNumber);
    urlencoded.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/otps/change_password", requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert(json);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <ModalOverlay onClick={isPasswordForgotten}></ModalOverlay>
      <ModalContent style={{ display: 'flex', flexDirection: 'row', width: '125vh', left: '18%'}}>
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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Title style={{marginLeft: '5vh'}}>Generate OTP</Title>
            <Title style={{marginLeft: '2vh'}}>Enter new password</Title>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '5vh'}}>
              <Label htmlFor="">Enter Phone Number.</Label>
              <Input
                type="tel"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '4vh'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <Label htmlFor="">Enter OTP.</Label>
                <Input
                  type="tel"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <Label htmlFor="">Change Password.</Label>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button onClick={(e) => generateOTP(e)}>Generate OTP</Button>
            <Button style={{width: '30vh'}} 
            onClick={(e) => validateOTP(e)}>Submit New Password</Button>
          </div>
        </div>
      </ModalContent>
    </>
  )
}

export default ForgotPassword;
