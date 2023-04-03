//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';


// create a component
const Menu = ({navigation}) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={[styles.btn,{backgroundColor:'#CB7DAC'}]} >
                <Text style={styles.textBtn}>Explore Animals</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => navigation.navigate('QuizMenu')}
                 style={[styles.btn,{backgroundColor:'#EBAF0B'}]}>
                <Text style={styles.textBtn}> Play Activities</Text>
            </TouchableOpacity>
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
    btn:{
        backgroundColor: '#45A46A',
        width: 300,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    },
    textBtn:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }
});

//make this component available to the app
export default Menu;
