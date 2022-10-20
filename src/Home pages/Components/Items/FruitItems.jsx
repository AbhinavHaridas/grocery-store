import React from 'react';
import { Text } from './Text';
import { Card } from './Card';
import { useState } from 'react';
import { useEffect } from 'react';

const  API_ADDRESS = 'http://localhost:5000/fruits';


const FruitItems = () => {
    const [jsonData, setJsonData] = useState(null)

    useEffect(() => {
        fetch(`${API_ADDRESS}`, { mode: 'cors' })
        .then(response => response.json())
        .then(json => {
            if (jsonData === null) setJsonData(json)
    })
    }, [jsonData])

    return ( 
        <div style={{
            marginLeft: "27%",
            marginTop: "8%"
        }}>
            <Text>Fruits</Text>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap: 'wrap'
                }
            }>
                {
                    jsonData?.fruits.map((fruit) => {
                        return (
                                <Card name={fruit.name} image={fruit.image} weight={fruit.weight} price={fruit.price} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default FruitItems;