import {React,useState} from 'react';
import { Link } from "react-router-dom";
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <nav className="main">
        <ul className="navbar">
          <li><div className="logo"><Link to ='/' className='link'><i class="fa-solid fa-utensils fa-2xl" style={{ color: 'white' }}/></Link></div></li>
          <li><Link to = "" onClick={toggle} className='link'><div className='box'><h3><b>Sign In</b></h3></div></Link></li>
          <li><Link to='/signup' className='link'><div className='box'><h3><b>Sign Up</b></h3></div></Link></li>
          <li><Link to='/aboutus' className='link'><div className='box'><h3><b>About Us</b></h3></div></Link></li>
      </ul>
      <Modal isOpen={isOpen} toggle={toggle} />
      </nav>
  );
}

export default Navbar;