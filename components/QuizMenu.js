//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const QuizMenu = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../assets/bgTree.png')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    bgImage:{
        marginTop:20,
        height: '100%',
        // width: 30,
        resizeMode:'contain',
        // flex:2,
        // backgroundColor:'red',
        left:'-55%'
    },
    card:{
        
    }
});

//make this component available to the app
export default QuizMenu;
