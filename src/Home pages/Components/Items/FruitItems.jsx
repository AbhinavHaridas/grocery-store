import React from 'react';
import { Text } from './Text';
import { Card } from './Card';

const FruitItems = () => {
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default FruitItems;