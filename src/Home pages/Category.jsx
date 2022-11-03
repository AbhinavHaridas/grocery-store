import React from "react";
import Vegetables from "./Components/category_components/Vegetables";
import Fruit from "./Components/category_components/Fruit";
import Footer from "../Landing pages/Components/Footer";
import Slider from "./Components/category_components/Slider";
import SearchNavbar from "./Components/SearchNavbar";

const Category = () => {
    return (
        <>
        <SearchNavbar />
        <Slider />
        <Vegetables />
        <Fruit />  
        <Footer />
        </>
    )
}

export default Category;