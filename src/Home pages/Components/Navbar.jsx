import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = () => {
    const places = [
        "MUMBAI 400080",
        "MUMBAI 400094",
        "MUMBAI 400056",
        "MUMBAI 400024",
        "MUMBAI 400012"
    ]

    const [ index, setIndex ] = useState(0)
    
    return (
        <nav className="main">
        <ul className="navbar">
          <li><div className="logo"><Link to ='/home' className='link'><i class="fa-solid fa-utensils fa-2xl" style={{color: 'white'}} /></Link></div></li>
          <li><h3>Deliver to <br/>{ places[index] }</h3></li>
          <li><Link to='/category'><h3>Categories</h3></Link></li>
          <li><h3>Offers</h3></li>
          <li><Link to='/trackorder'><h3>Orders</h3></Link></li>
          <li><div className="cart"><i class="fa-solid fa-cart-shopping fa-2xl" style={{color: 'white'}}/></div></li>
          <li><div className="dropdown"><i class="fa-thin fa-bars fa" style={{color: 'white'}}></i></div></li>
        </ul>
      </nav>
    )
}

export default Navbar;