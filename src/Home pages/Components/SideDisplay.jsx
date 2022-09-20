import React from "react";
import VegetablesItems from "./Items/VegetablesItems";
import FruitItems from "./Items/FruitItems";
import FrozenVegItems from "./Items/FrozenVegItems";
import ExoticItems from "./Items/ExoticItems";
import OrganicItems from "./Items/OrganicItems";
import FreshlyCutItems from "./Items/FreshlyCutItems";

const placement = {
    left: "20%",
    top: "20%"
}

const SideDisplay = ({choice}) => {
    switch(choice) {
        case 1: 
            return <VegetablesItems />
        case 2:
            return <FruitItems />
        case 3:
            return <FrozenVegItems />
        case 4:
            return <ExoticItems />
        case 5:
            return <OrganicItems />
        case 6:
            return <FreshlyCutItems />
    }
}

export default SideDisplay;