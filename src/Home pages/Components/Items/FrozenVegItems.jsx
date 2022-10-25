// Useless Component

import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState, useEffect } from 'react';

const  API_ADDRESS = 'http://localhost:8000/frozen';

const FrozenVegItems = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(()=> {
        fetch(API_ADDRESS, {mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if (jsonData === null) setJsonData(json);
        })
    })   
    return (
        <div style={{
            marginLeft: "27%",
            marginTop: "8%"
        }}>
        <Text>Frozen Veg </Text>
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.frozen.map((fr) => {
                        return (
                            <Card name={fr.name} 
                            image={fr.image} 
                            weight={fr.weight} 
                            price={fr.price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FrozenVegItems;