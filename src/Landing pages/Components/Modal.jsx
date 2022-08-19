import {React,useState} from 'react'
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgb(186 186 186 / 40%);
`;

const ModalContent = styled.div`
  height: 80%;
  width: 35%;
  position: absolute;
  top: 10%;
  left: 32.5%;
  background: #373a37;
  border-radius: 30.5px;
  overflow:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  background: white;
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
  background-color: blue;
  height:50%;
  display: flex;
  flex-direction: column;
  padding:15px;
  `;

const Input = styled.input`
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size:25px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 15px;
  height: 10%;
  margin-bottom:15px;
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


const Modal = ({ isOpen, toggle }) => {
    const [phoneNumber, setPhoneNumber] = useState();
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                            />
                            <Label htmlFor="">Enter Password</Label>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                />
              </Form>
            </FormWrap>
          </ModalContent>
        </>
      )
    );
}

export default Modal;