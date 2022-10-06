import React from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import SideDisplay from "./Components/SideDisplay";
import { useState, useEffect } from "react";

const CategoryItems = () => {
    const [choice, setChoice] = useState(1);

    useEffect(() => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }, [choice]);

    return (
        <div>
            <div style={{position: 'fixed', top: '0%', width: '100%'}}>
                <Navbar />
            </div>
            <div style={{display: "flex", justifyContent:"row"}}>
                <SideNavbar setChoice={setChoice} />
                <SideDisplay choice={choice} />
            </div>
        </div>

    )
}

export default CategoryItems;