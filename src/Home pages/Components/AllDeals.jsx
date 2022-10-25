import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Deals from "./Deals";

const API_ADDRESS = "http://localhost:8000/deals/get_deal_types";

const COLORS = [
    "rgb(12, 207, 185)",
    "rgb(224, 167, 59)",
    "grey"
]

const AllDeals = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetch(API_ADDRESS, {mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            if (jsonData === null) setJsonData(json);
        })
    })

    return (
        <>
            {
                jsonData?.map((deal_type) => {
                    return <Deals id={deal_type.id} title={deal_type.title} COLORS={COLORS} />
                })
            }
        </>
    )
}

export default AllDeals;