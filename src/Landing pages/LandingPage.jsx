import React from "react";
<<<<<<< Updated upstream:src/Landing pages/LandingPage.jsx
import Navbar from "./Components/Navbar";
import '../Landing pages/LandingStyles/LandingStyle.css';
=======
import LandingNavbar from "../Components/LandingNavbar";
import '../App.css';
import AutoSlider from "../Components/AutoSlider";

>>>>>>> Stashed changes:src/Landing pages/App.jsx


const App = () => {
    return (
        <div className="Landing">
            <LandingNavbar />
            <AutoSlider />
        </div>
    )
}

export default App;
