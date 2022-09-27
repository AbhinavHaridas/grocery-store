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
    
    const increaseIndex = () => {
      setIndex((index + 1) % places.length);
    }

    return (
        <nav className="main">
          <ul className="navbar">
            <li><div className="logo"><Link to ='/home' className='link'><i class="fa-solid fa-utensils fa-2xl" style={{color: 'white'}} /></Link></div></li>
            <li><h3>Deliver to <br/><h3 style={{margin: '0', cursor: 'pointer', userSelect: 'none'}} onClick={increaseIndex}>{ places[index] }</h3></h3></li>
            <li><Link to='/category'><h3>Categories</h3></Link></li>
            <li><h3>Offers</h3></li>
            <li><h3><b>Orders</b></h3></li>
            <li><div className="cart"><Link to ='/cart' className="link"><i class="fa-solid fa-cart-shopping fa-2xl" style={{color: 'white'}}/></Link></div></li>
            <li><div className="dropdown"><i class="fa-thin fa-bars fa" style={{color: 'white'}}></i></div></li>
          </ul>
      </nav>
    )
}

export default Navbar;