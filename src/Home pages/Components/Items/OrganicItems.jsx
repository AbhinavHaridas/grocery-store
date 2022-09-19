import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { TextC } from './TextC';
import { TextP } from './TextP';
import { Button } from './Button';

const CardBackground = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    transition: 0.3s;
    width: 30vh;
    height: 42vh;
    border-radius: 5px;
    background-color: white;
    border: solid gray 1px
`

const InsideCard = () => {
    return (
        <div style={{height: '40vh'}}>
            <div style={{display: 'flex', justifyContent: 'center'}} >
            <img src="https://i.imgur.com/tUrtXEA.png" 
                style={{ width: '18.556701030927837vh', height: '15.463917525773196vh', marginTop: '5vh'}} 
            alt="images" />
            </div>
            <TextP style={{marginLeft: '1vh'}}>Fresh Tomatoes</TextP>
            <TextC style={{marginLeft: '1vh'}}>500g</TextC>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',  
                marginRight: '3.0927835051546393vh',
                marginBottom: '2.0618556701030926vh' 
                }}>
                <TextP style={{marginLeft: '1vh'}}>$40.10</TextP>
                <Button style={{ 
                    width: '4.123711340206185vh', height: '4.123711340206185vh', 
                    borderRadius: '2.0618556701030926vh', 
                    backgroundColor: '#6ff06f', 
                    color: 'white',
                    
                    fontSize: '3.1023784901758016vh',
                    textAlign: 'center',
                    userSelect: 'none'
                    }}>
                    +
                </Button>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <CardBackground>
            <InsideCard />
        </CardBackground>
    )
}

const OrganicItems = () => {
    return (
        <div style={{marginLeft: '40px'}}>
        <Text>Organic </Text>
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

export default OrganicItems;