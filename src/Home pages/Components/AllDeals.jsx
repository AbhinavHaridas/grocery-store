import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Deals from "./Deals";

const COLORS = ["rgb(175,238,238)", "rgb(255,192,203)", "rgb(250,250,210)"];

const AllDeals = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/deals/get_deal_types", { mode: "cors" })
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
      });
  }, []);

  return (
    <>
      {jsonData?.map((deal_type) => {
        return (
          <Deals id={deal_type.id} title={deal_type.title} COLORS={COLORS} />
        );
      })}
    </>
  );
};

export default AllDeals;
