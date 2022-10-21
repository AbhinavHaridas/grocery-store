import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState, useEffect } from 'react';

const API_ADDRESS = "http://localhost:5000/organic";

const OrganicItems = () => {
    const [ jsonData, setJsonData ] = useState(null)

    useEffect(() => {
        fetch(API_ADDRESS, {mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            if (jsonData === null) setJsonData(json);
        })
    })
    return (
        <div style={{
            marginLeft: "27%",
            marginTop: "8%"
        }}>
        <Text>Organic </Text>
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.organic.map((o) => {
                        return (
                            <Card name={o.name} 
                            image={o.image} 
                            weight={o.weight} 
                            price={o.price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OrganicItems;