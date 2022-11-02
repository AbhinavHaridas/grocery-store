import React from "react";
import  Navbar from "./Components/Navbar";
import Footer from "../Landing pages/Components/Footer";
import Slider from "./Components/category_components/Slider";
import AllCategories from "./AllCategories";

const Category = () => {
    return (
        <>
        <Navbar />
        <Slider />
        <AllCategories />
        <Footer />
        </>
    )
}

export default Category;