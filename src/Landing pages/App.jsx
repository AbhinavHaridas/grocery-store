import React from "react";
import Navbar from "../Components/Navbar";
import '../App.css';


const App = () => {
    return (
        <div className="Landing">
            <Navbar />
            <div className="intro">
                <h1>Fresh groceries delivered right to your door step</h1>
            </div>
        </div>
    )
}

export default App;
