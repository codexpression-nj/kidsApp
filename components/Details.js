//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { animalData } from '../services/data';
import { AntDesign } from '@expo/vector-icons';

// create a component
const Details = ({ route,navigation }) => {
    const { itemId } = route.params;
    const item = animalData.find((item) => item.id === itemId);
    const letter = item.name.charAt(0)
    return (
        <View style={styles.container}>
            <Text style={[styles.letter, { color: item.backgroundColor }]}>{letter}</Text>
            <View style={{ paddingTop: 200 }}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity style={{ backgroundColor: "#E38B40", width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100, margin: 10 }}>
                    <AntDesign name="sound" size={24} color="white" />
                </TouchableOpacity>
                <Text style={[styles.description, { color: item.backgroundColor }]}>{item.description}</Text>

            </View>
            <Image style={styles.image} source={item.image} />
            <TouchableOpacity style={{
                height: 50,
                width: 70, 
                justifyContent: 'flex-start',
                alignContent: "flex-start",
                alignSelf: 'flex-start',
            }} 
                onPress={() => navigation.navigate('Home')}
            >

                <Image style={styles.arrowButton} source={require('../assets/arrowButton.png')} />

            </TouchableOpacity>
            <Image style={styles.bgImg} source={require('../assets/bgGra.png')} />
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    letter: {
        fontWeight: 'bold',
        fontSize: 300,
        opacity: 0.2,
        position: 'absolute',
        top: 0,
        left: 10
    },
    image: {
        width: 200,
        height: 180,
        resizeMode: 'contain',
        position: 'absolute',
        top: 50
    },
    description: {
        margin: 20,
        fontWeight: '400',
        fontSize: 20,
        // letterSpacing:1,
        lineHeight: 30,
        // paddingTop:30
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 50,
        marginLeft: 16,
        // textAlign:'center'
    },
    bgImg: {
        width: '100%',
        height: 30,
        bottom: 0,
        position: 'absolute',
        // resizeMode:'contain'
    },
    arrowButton: {
        // position: 'absolute',
        // bottom:50,
        resizeMode: 'contain',
        height: 50,
        width: 70,

        marginLeft: 16
    },
    btn: {
        height: 50,
        width: 100,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Details;
