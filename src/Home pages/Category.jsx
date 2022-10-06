import React from "react";
import Vegetables from "./Components/category_components/Vegetables";
import Fruit from "./Components/category_components/Fruit";
import  Navbar from "./Components/Navbar";
import Footer from "../Landing pages/Components/Footer";
import Slider from "./Components/category_components/Slider";

const Category = () => {
    return (
        <>
        <Navbar />
        <Slider />
        <Vegetables />
        <Fruit />  
        <Footer />
        </>
    )
}

export default Category;