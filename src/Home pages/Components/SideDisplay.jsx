import React, { useEffect } from "react";
import VegetablesItems from "./Items/VegetablesItems";
import FruitItems from "./Items/FruitItems";
import FrozenVegItems from "./Items/FrozenVegItems";
import ExoticItems from "./Items/ExoticItems";
import OrganicItems from "./Items/OrganicItems";
import FreshlyCutItems from "./Items/FreshlyCutItems";
import { Card } from './Items/Card';
import { Text } from './Items/Text';

const SideDisplay = ({ choice, categories, jsonData }) => {
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
                    image={item.image} quantity={item.quantity} />
                })
            }
            </div>
        </div>
    )
}

export default SideDisplay;