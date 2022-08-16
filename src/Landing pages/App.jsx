import React from "react";
import LandingNavbar from "../Components/LandingNavbar";
import '../App.css';
import AutoSlider from "../Components/AutoSlider";



const App = () => {
    return (
        <div className="Landing">
            <LandingNavbar />
            <AutoSlider />
        </div>
    )
}

export default App;
