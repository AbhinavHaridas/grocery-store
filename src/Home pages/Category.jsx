import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "../Landing pages/Components/Footer";
import Slider from "./Components/category_components/Slider";
import AllCategories from "./AllCategories";
import { useState } from "react";
import SearchNavbar from "./Components/SearchNavbar";

const Category = () => {
  const [scrollID, setScrollID] = useState(0);

  return (
    <>
      <SearchNavbar />
      <Slider setScrollID={setScrollID} scrollID={scrollID} />
      <AllCategories scrollID={scrollID} />
      <Footer />
    </>
  );
};

export default Category;

// import React from "react";
// import Vegetables from "./Components/category_components/Vegetables";
// import Fruit from "./Components/category_components/Fruit";
// import Footer from "../Landing pages/Components/Footer";
// import Slider from "./Components/category_components/Slider";
// import SearchNavbar from "./Components/SearchNavbar";

// const Category = () => {
//     return (
//         <>
//         <SearchNavbar />
//         <Slider />
//         <Vegetables />
//         <Fruit />
//         <Footer />
//         </>
//     )
// }

// export default Category;
