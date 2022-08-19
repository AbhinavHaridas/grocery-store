import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="main">
        <ul className="navbar">
          <li><div className="logo"><Link to ='/' className='link'><i class="fa-solid fa-utensils fa-2xl" style={{ color: 'white' }}/></Link></div></li>
          <li><Link to ='/home' className='link'><div className='box'><h3><b>Sign In</b></h3></div></Link></li>
          <li><Link to='/signup' className='link'><div className='box'><h3><b>Sign Up</b></h3></div></Link></li>
          <li><Link to='/aboutus' className='link'><div className='box'><h3><b>About Us</b></h3></div></Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;