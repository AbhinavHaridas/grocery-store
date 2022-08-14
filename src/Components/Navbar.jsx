import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
      <i class="fa-solid fa-utensils fa-2xl" />
      </div>
        <nav>
          <ul className="navbar">
            <li><Link to ='/signin' className='link'><div className='box'><h3><b>Sign In</b></h3></div></Link></li>
            <li><Link to='/signup' className='link'><div className='box'><h3><b>Sign Up</b></h3></div></Link></li>
            <li><Link to='/aboutus' className='link'><div className='box'><h3><b>About Us</b></h3></div></Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;