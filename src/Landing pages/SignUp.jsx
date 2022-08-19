import React, { useState } from "react";
import styled from "styled-components";
import image from "./images/Pineapple.jpg";

const SignUpPageWrap = styled.div`
  display: flex;
  font-family: "Forum", cursive;
  justify-content: center;
  align-items: center;
  background-color: #00a8ff;
  height: 100vh;
`;

const SignUpPage = styled.div`
  padding: 5px 53px;
`;

const Text = styled.text`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 70px;
  color: white;
  filter: drop-shadow(0px 10px 18px rgba(0, 0, 0, 0.25));
  text-shadow: 5px 6px 8px rgb(0 0 0 / 25%);
  margin-bottom: 1.5px;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;

const FormWrap = styled.div`
  height: 550px;
  overflow-y: auto;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CreateButton = styled.button`
  background-color: #33d9b2;
  color: white;
  border-radius: 5px;
  border: none;
  width: 150px;
  height: 40px;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover,
  focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    background-color: orange;
  }
`;

const Input = styled.input`
  background-color: #fddcdc;
  border: none;
  border-radius: 5px;
  padding: 6px;
`;

const Textarea = styled.textarea`
  background-color: #fddcdc;
  border: none;
  border-radius: 7px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: semi-bold;
  margin: 10px 0px;
`;

const SignUpImage = styled.div``;

const Image = styled.img`
  margin-top: 15px;
  height: 690px;
  border-radius: 10px;
`;

const SignUp = () => {
  const [searchString, setSearchString] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [location, setLocation] = useState();

  return (
    <SignUpPageWrap>
      <SignUpPage>
        <Text>Dont fall behind</Text>
        <Text style={{ marginTop: -5 }}>Join Now</Text>
        <FormWrap>
          <Form>
            {/* Name */}
            <Label htmlFor="" style={{ marginTop: -5 }}>
              Name:
            </Label>
            <Input
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            {/* Phone no */}
            <Label htmlFor="">Contact No:</Label>
            <Input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
            />
            {/* Email */}
            <Label htmlFor="">Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Address */}
            <Label htmlFor="">Address:</Label>
            <Textarea
              rows={4}
              cols={50}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {/* Password */}
            <Label htmlFor="">Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Confirm Password */}
            <Label htmlFor="">Confirm Password:</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Location */}
            <Label htmlFor="">Location</Label>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <CreateButton>Create Account</CreateButton>
          </Form>
        </FormWrap>
      </SignUpPage>
      <SignUpImage>
        <Image
          src={image}
          alt="pineapple"
          style={{ boxShadow: "5px 5px 20px 5px rgba(0, 0, 0, 0.25)" }}
        />
      </SignUpImage>
    </SignUpPageWrap>
  );
};

export default SignUp;
