import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
      <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png" alt="" title="" width="122" height="28" class="sc-1go0t46-0 jrUJru" />
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