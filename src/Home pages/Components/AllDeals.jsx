import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Deals from "./Deals";

const COLORS = [
    "rgb(12, 207, 185)",
    "rgb(224, 167, 59)",
    "grey"
]

const AllDeals = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/deals/get_deal_types", {mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            setJsonData(json);
        })
    }, [])

    return (
        <>
            {
                jsonData?.map((deal_type) => {
                    console.log(deal_type.id)
                    return <Deals id={deal_type.id} title={deal_type.title} COLORS={COLORS} />
                })
            }
        </>
    )
}

export default AllDeals;