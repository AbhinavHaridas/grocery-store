import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState, useEffect } from 'react';

const API_ADDRESS = "http://localhost:5000/freshlycut"

const FreshlyCutItems = () => {
    const [ jsonData, setJsonData ] = useState(null);

    useEffect(() => {
        fetch(API_ADDRESS, {mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            if (jsonData === null) setJsonData(json)
        })
    })

    return (
        <div style={{
            marginLeft: "27%",
            marginTop: "8%"
        }}>
        <Text>Freshly cut</Text>
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.freshlycut.map((fc) => {
                        return (
                            <Card name={fc.name} 
                            image={fc.image} 
                            weight={fc.weight} 
                            price={fc.price} />
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default FreshlyCutItems;