import React from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import SideDisplay from "./Components/SideDisplay";
import { useState } from "react";

const CategoryItems = () => {
    const [choice, setChoice] = useState(1);

    return (
        <div>
            <Navbar />
            <div style={{display: "flex", justifyContent:"row"}}>
                <SideNavbar setChoice={setChoice} />
                <SideDisplay choice={choice} />
            </div>
        </div>

    )
}

export default CategoryItems;