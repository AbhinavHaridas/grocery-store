import React, { useState } from "react";
import styled from "styled-components";

// Components import here
import LandingNavbar from "./Components/LandingNavbar";
import SocialMedia from "../Landing pages/Components/Social-media";

// Assets import here
import image from "../Landing pages/images/ContactImage.jpg";
import { useEffect } from "react";

const ImageWrap = styled.div`
  width: 100%;
  height: 81.5vh;
  min-height: 82vh;
  max-height: 81.5vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000;
`;

const ImageText = styled.h1`
  position: absolute;
  width: 50%;
  font-family: "Forum";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 80px;
  color: #ffffff;
  text-align: center;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Form = styled.form`
  background-color: white;
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 47px 22px;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  background-color: #f7f1e3;
  color: black;
  border-radius: 5px;
  border: none;
  width: 120px;
  height: 40px;
  align-self: center;
  margin-top: 20px;
  cursor: pointer;
  font-family: "Forum", cursive;
  transition: 0.3s ease-in-out;
  :hover,
  focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    background-color: orange;
  }
    font-size: 20px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  background-color: #f7f1e3;
  margin-bottom: 24px;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  ::placeholder {
    font-family: "Forum", cursive;
    font-size: 16px;
  }
`;

const Textarea = styled.textarea`
  background-color: #f7f1e3;
  border: none;
  border-radius: 7px;
  padding: 8px 16px;
  ::placeholder {
    font-family: "Forum", cursive;
    font-size: 16px;
  }
`;

const FormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 50%;
  position: absolute;
  top: 2%;
  right: 8%;
`;

const Select = styled.select`
  background-color: #f7f1e3;
  margin-bottom: 24px;
  border-radius: 5px;
  padding: 8px 12px;
  border: none;
  font-size: 16px;
  font-family: "Forum", cursive;
`;

const ContactWrap = styled.div`
  position: relative;
  font-family: "Forum", cursive;
`;

const Reach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;
  background-color: #ebe6e6;
  margin-top: -4px;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 83px;
  margin: 0;
`;

const Mail = styled.a`
  text-decoration: none;
  color: #6f6c6c;
  margin-top: 19px;
`;

const Email = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 55px;
`;

const LocationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  padding: 30px;
`;

const Branch = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 39px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 15px;
`;

const Address = styled.text`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
`;

const Contact = ({ text = "Mumbai" }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [contact, setContact] = useState();
  const [reason, setReason] = useState("");

  const insertFeedback = (e) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("customer_id", "2");
    urlencoded.append("name", name);
    urlencoded.append("contact", contact);
    urlencoded.append("email", email);
    urlencoded.append("reason", reason);
    urlencoded.append("description", description);

    var requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/feedbacks/insert_feedback", requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert(json);
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    console.log(reason);
  }, [reason])

  return (
    <>
      <LandingNavbar />
      <ContactWrap>
        {/* <Image src={image} alt="No image" /> */}
        <ImageWrap>
          <ImageText>We would love to hear from you!</ImageText>
        </ImageWrap>
        <FormWrap>
          <Form>
            <Select
            onChange={(e) => {
              setReason(e.target.value);
            }}>
              <option value="default" hidden style={{ color: "#454545" }}>
                How can we help you*
              </option>
              <option value="help">I need help with my order</option>
              <option value="outdated">
                I found incorrect/outdated information on a page
              </option>
              <option value="not-working">
                The website is not working the way it should
              </option>
              <option value="feedback">
                I would like to give feedback/suggestions
              </option>
              <option value="other">Other</option>
            </Select>
            {/* Name */}
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
            />
            {/* Contact */}
            <Input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact*"
              maxLength={10}
            />
            {/* Email */}
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
            />
            {/* Query */}
            <Textarea
              rows={6}
              cols={50}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type Text Here*"
            />
            <SubmitButton onClick={(e) => insertFeedback(e)}>Submit</SubmitButton>
          </Form>
        </FormWrap>
        <Reach>
          <Text>You can also reach out to us on:</Text>
          <SocialMedia />
          <Text style={{ marginTop: 40 }}>or mail us at:</Text>
          <Mail href="mailto:2020.shaun.dsouza@ves.ac.in">
            <Email>2020.shaun.dsouza@ves.ac.in</Email>
          </Mail>
          <Mail href="mailto:2020.abhinav.haridas@ves.ac.in">
            <Email>2020.abhinav.haridas@ves.ac.in</Email>
          </Mail>
          <Text style={{ marginTop: 40 }}>we are located at:</Text>
          <LocationWrap>
            <Location>
              <Branch>Headquarters</Branch>
              <Address>
                Level 7, Plot no, FIFC Building, C-54&55, G Block BKC, Bandra
                East, Mumbai, Maharashtra 400098
              </Address>
            </Location>
            <Location>
              <Branch>{text} Branch</Branch>
              <Address>
                Level 7, Plot no, FIFC Building, C-54&55, G Block BKC, Bandra
                East, Mumbai, Maharashtra 400098
              </Address>
            </Location>
          </LocationWrap>
        </Reach>
      </ContactWrap>
    </>
  );
};

export default Contact;
