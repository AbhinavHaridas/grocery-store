import React from "react";
import '../Landing pages/LandingStyles/LandingStyle.css';
import LandingNavbar from "./Components/LandingNavbar";
import AutoSlider from "./Components/AutoSlider";
import NewNavbar from "./Components/NewNavbar";


const App = () => {
    return (
        <div className="Landing">
            {/* <LandingNavbar /> */}
            <NewNavbar/>
            <AutoSlider />
        </div>
    )
}

export default App;
