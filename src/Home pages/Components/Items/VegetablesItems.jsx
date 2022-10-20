import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState } from 'react';
import { useEffect } from 'react';

const  API_ADDRESS = 'http://localhost:5000/vegetables';

const VegetablesItems = () => {
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
            }}
        >
            <Text>Vegetables</Text>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.vegetables.map((vegetable) => {
                        return (
                            <Card name={vegetable.name} 
                            image={vegetable.image} 
                            weight={vegetable.weight} 
                            price={vegetable.price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VegetablesItems;