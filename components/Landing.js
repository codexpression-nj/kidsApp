//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Background from './Background';

// create a component
const Landing = ({navigation}) => {
    return (
        <>
         <View style={styles.container}>
            
            {/* <Text>landing</Text> */}
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
                >
                <Text style={{color:'white'}}>Get Started </Text>
            </TouchableOpacity>
            <View >
           
        </View>
        <Image style={styles.img} source={require('../assets/grass.png')}/>

{/* <Background ></Background> */}
</View>
        </>
       
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
    button:{
        backgroundColor:'#45A46A',
        width: 200,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'

    },
    img:{
        width: '100%',
        height: 210,
        bottom:0,
        position:'absolute'
    }
});

//make this component available to the app
export default Landing;
