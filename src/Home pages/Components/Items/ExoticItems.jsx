import React from 'react';
import { Text } from './Text';
import { Card } from './Card';

const ExoticItems = () => {
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

export default ExoticItems;