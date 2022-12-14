import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Modal from './Modal';

const LandingNavbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <nav className="main">
        <ul className="navbar">
          <li><Link to="/"><div className="logo"><i class="fa-solid fa-utensils fa-2xl" style={{ color: 'black' }}/></div></Link></li>
          <li><div className='box' onClick={toggle} style={{ cursor:'pointer' }}><h3 style={{ color: "black" }}><b>Sign In</b></h3></div></li>
          <li><Link to='/signup' className='link'><div className='box'><h3 style={{ color: "black" }}><b>Sign Up</b></h3></div></Link></li>
          <li><Link to='/aboutus' className='link'><div className='box'><h3 style={{ color: "black" }}><b>About Us</b></h3></div></Link></li>
      </ul>
      <Modal isOpen={isOpen} toggle={toggle} />
      </nav>
  );
}

export default LandingNavbar;