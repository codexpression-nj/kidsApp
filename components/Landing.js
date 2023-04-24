//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Background from './Background';

// create a component
const Landing = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <TextInput style={styles.input} placeholder='username'></TextInput>
                <TextInput style={styles.input} secureTextEntry={true} placeholder='password'></TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={{ color: 'white' }}>Get Started </Text>
                </TouchableOpacity>
                <TouchableOpacity

                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: '#45A46A' }}>Register</Text>
                </TouchableOpacity>
                <View >

                </View>
                <Image style={styles.image} source={require('../assets/boy.png')} />
                {/* <Image style={styles.img} source={require('../assets/grass.png')} /> */}
                <Image style={styles.bgImg} source={require('../assets/bgGra.png')} />

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
    button: {
        backgroundColor: '#45A46A',
        width: 300,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: 210,
        bottom: 0,
        position: 'absolute'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        bottom: 0,
        position: 'absolute'
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dedede',
        width: 300,
        height: 50,
        padding: 16,
        margin: 10
    },
    signUpButton: {

    }, 
    logo:{
        width:150,
        height: 150,
        marginTop:-150
    },
    bgImg: {
        width: '100%',
        height: 30,
        bottom: 0,
        position: 'absolute',
        // resizeMode:'contain'
    },
});

//make this component available to the app
export default Landing;
