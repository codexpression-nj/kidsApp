//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { animalData } from '../services/data';

// create a component
const Details = ({route}) => {
    const { itemId } = route.params;
    const item = animalData.find((item) => item.id === itemId);
    
    return (
        <View style={styles.container}>
            <Text>{item.description}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Details;
