import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./faq.css"
import Navbar from '../Components/Navbar';
import Footer from "../../Landing pages/Components/Footer";

const FAQ1 = () => {
    return (
    
        <><h1 className='style' align="center">Frequently Asked Questions</h1>
       
        <div style={{minHeight: '80vh'}}><Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>Do you provide delivery in my area?</b></Accordion.Header>
                <Accordion.Body>
                We provide deliveries at specific locations. If your location is within the range of the cities we deliver, your delivery will be provided
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><b>Can I Use Coupons on my grocery shopping and delivery order?</b></Accordion.Header>
                <Accordion.Body>
                We do not accept any food coupons for our store currently
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><b>What if i am not happy with an grocery item and my delivery order</b></Accordion.Header>
                <Accordion.Body>
                We have a contact us section in our website. Please enter your issues there and the required action will be taken immediately
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><b>What are your shop's delivery hours?</b></Accordion.Header>
                <Accordion.Body>
                Order can be placed any time and the delivery will be provided between 10:30 am and 8:30 pm
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><b>Who can I contact with to discuss all my queries regarding the website?</b></Accordion.Header>
                <Accordion.Body>
                Please contact Himnish Israni through my Phone No: +91 79778 54846 or his Email: 2020.himnish.israni@ves.ac.in
                </Accordion.Body>
            </Accordion.Item>
        </Accordion ></div></>
          );
        }
        

        const FAQ = () => {
            return (
                <>
                <Navbar />
                
                <FAQ1 />
                
                <Footer />
                </>
            )
          }
          export default FAQ;
        
