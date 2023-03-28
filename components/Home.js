//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <View style={styles.card}>

            </View>
            <View style={styles.card}>

</View>
        </View> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    card:{
        width:'90%',
        height: 90,
        backgroundColor: 'pink',
        margin:10
    }
});

//make this component available to the app
export default Home;
