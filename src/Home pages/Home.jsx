import React from "react";
import  Deals from "./Components/Deals";
import  Header  from "./Components/Header";
import  Navbar from "./Components/Navbar";
import Bestsellers from "./Components/Bestsellers";
import Footer from "../Landing pages/Components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Deals />
            <Bestsellers />
            <Footer />
        </>
    )
}

export default Home;