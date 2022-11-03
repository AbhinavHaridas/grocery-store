import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Categories from "./Categories";

const COLORS = [

];

const AllCategories = ({ scrollID }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8000/categories/fetch_category_types",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setJsonData(json))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      {jsonData?.map((category) => {
        return (
          <Categories
            id={category.id}
            title={category.title}
            COLORS={COLORS}
            scrollID={scrollID}
          />
        );
      })}
    </>
  );
};

export default AllCategories;
