import React, { useEffect } from "react";
import VegetablesItems from "./Items/VegetablesItems";
import FruitItems from "./Items/FruitItems";
import FrozenVegItems from "./Items/FrozenVegItems";
import ExoticItems from "./Items/ExoticItems";
import OrganicItems from "./Items/OrganicItems";
import FreshlyCutItems from "./Items/FreshlyCutItems";
import { Card } from './Items/Card';
import { Text } from './Items/Text';
import { useState } from "react";

const SideDisplay = ({ choice, categories, jsonData }) => {

    // switch(choice) {
    //     case 1: 
    //         return <VegetablesItems />
    //     case 2:
    //         return <FruitItems />
    //     case 3:
    //         return <FrozenVegItems />
    //     case 4:
    //         return <ExoticItems />
    //     case 5:
    //         return <OrganicItems />
    //     case 6:
    //         return <FreshlyCutItems />
    //     default:
    //         return null
    // }
    return (
        <div style={{
            marginLeft: "27%",
            marginTop: "8%"
        }}>
            <Text>{categories[choice - 1]?.title}</Text>
            <div style={
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
            {
                jsonData?.map((item) => {
                    return <Card name={item.name} price={item.price} 
                    image={item.image} quantity={item.quantity}
                    id={categories.id} />
                })
            }
            </div>
        </div>
    )
}

export default SideDisplay;