import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <ul className="Socials">
                <li><Link to='/aboutus' className="Link"><h3 className="s">About Us</h3></Link></li>
                <li><Link to='/home' className="Link"><h3 className="s">Contact</h3></Link></li>
                <li><Link to='/home' className="Link"><h3 className="s">Terms</h3></Link></li>
            </ul>
            <ul className="circles">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </ul>
            <p>© XYZ Commerce Private Limited. 2022-2024</p>
        </div>
    )
}

export default Footer;