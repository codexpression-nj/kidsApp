//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Background = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Background</Text> */}
            <Image style={styles.img} source={require('../assets/grass.png')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    //    backgroundColor:'transperant',
     
    //    flex:2
    },
    img:{
        width:1000,
        // height:20,
        position:'absolute',
        bottom:0,
        resizeMode:'cover'   
     }
});

//make this component available to the app
export default Background;
