//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
// create a component
const windowWidth = Dimensions.get('window').width;

const Menu = ({navigation}) => {
    const animation = useRef(null);
    return (

        <View style={styles.container}>
            <LottieView
                autoPlay
                // loop={false}
                // duration={300}
                ref={animation}
                style={styles.animation}
                speed={1}
                // onAnimationFinish= { () => navigation.navigate('QuizMenu')}
                source={require('../assets/monkey.json')}
            />
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
            <Image style={styles.bgImg} source={require('../assets/bgGra.png')} />

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
    },  bgImg: {
        width: '100%',
        height: 30,
        bottom: 0,
        position: 'absolute',
        // resizeMode:'contain'
    },
    animation:{
        // marginTop:-1,
        height: 300,
        position:"absolute",
        top:-20,
        width: windowWidth,
        backgroundColor:'transparent'
    }
});

//make this component available to the app
export default Menu;
