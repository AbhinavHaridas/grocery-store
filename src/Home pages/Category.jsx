import React from "react";
import  Navbar from "./Components/Navbar";
import Footer from "../Landing pages/Components/Footer";
import Slider from "./Components/category_components/Slider";
import AllCategories from "./AllCategories";
import { useState } from "react";

const Category = () => {
    const [scrollID, setScrollID] = useState(0);

    return (
        <>
        <Navbar />
        <Slider setScrollID={setScrollID} scrollID={scrollID} />
        <AllCategories scrollID={scrollID} />
        <Footer />
        </>
    )
}

export default Category;