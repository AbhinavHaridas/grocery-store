import React from "react";
import Vegetables from "./Components/category_components/Vegetables";
import Fruit from "./Components/category_components/Fruit";
import Dailyessential from "./Components/category_components/Dailyessential";
import Instantfood from "./Components/category_components/Instantfood";
import Cleaningessential from "./Components/category_components/Cleaningessential";
import Personalcare from "./Components/category_components/Personalcare";
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
        <Dailyessential/>
        <Instantfood/>
        <Cleaningessential/>
        <Personalcare /> 
        <Footer />
        </>
    )
}

export default Category;