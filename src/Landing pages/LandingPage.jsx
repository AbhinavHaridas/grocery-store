import React from "react";
import '../Landing pages/LandingStyles/LandingStyle.css';
import LandingNavbar from "./Components/LandingNavbar";
import AutoSlider from "./Components/AutoSlider";


const App = () => {
    return (
        <div className="Landing">
            <LandingNavbar />
            <AutoSlider />
        </div>
    )
}

export default App;
