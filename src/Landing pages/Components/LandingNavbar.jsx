import React from 'react';
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
      <nav className="main">
        <ul className="navbar">
          <li><div className="logo"><i class="fa-solid fa-utensils fa-2xl" /></div></li>
          <li><Link to ='/signin' className='link'><div className='box'><h3 style={{ color: "black" }}><b>Sign In</b></h3></div></Link></li>
          <li><Link to='/signup' className='link'><div className='box'><h3 style={{ color: "black" }}><b>Sign Up</b></h3></div></Link></li>
          <li><Link to='/aboutus' className='link'><div className='box'><h3 style={{ color: "black" }}><b>About Us</b></h3></div></Link></li>
        </ul>
      </nav>
  );
}

export default LandingNavbar;