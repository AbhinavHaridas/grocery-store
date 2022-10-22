import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState, useEffect } from 'react';

const  API_ADDRESS = 'http://localhost:8000/exotic';

const ExoticItems = () => {
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
        <Text>Exotic</Text>
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.exotic.map((ex) => {
                        return (
                            <Card name={ex.name} 
                            image={ex.image} 
                            weight={ex.weight} 
                            price={ex.price} />
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default ExoticItems;