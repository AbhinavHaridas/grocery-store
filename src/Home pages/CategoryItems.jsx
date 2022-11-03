import React from "react";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import SideDisplay from "./Components/SideDisplay";
import { useState, useEffect } from "react";
import SearchNavbar from "./Components/SearchNavbar";

const CategoryItems = () => {
  const [choice, setChoice] = useState(1);
  const [categories, setCategories] = useState([]);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/categories/fetch_category_types", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        json.map((category) => {
          return setCategories((categories) => [...categories, category]);
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:8000/categories/get_specific_category_items?type_id=${choice}`
    )
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      });
  }, [choice]);

  return (
    <div>
      <div style={{ position: "fixed", top: "0%", width: "100%" }}>
        <SearchNavbar />
      </div>
      <div style={{ display: "flex", justifyContent: "row" }}>
        <SideNavbar setChoice={setChoice} categories={categories} />
        <SideDisplay
          choice={choice}
          categories={categories}
          jsonData={jsonData}
        />
      </div>
    </div>
  );
};

export default CategoryItems;
