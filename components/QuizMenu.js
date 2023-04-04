//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { quiz } from '../services/data';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CardItem = ({ data, onPress }) => (
   <View style={styles.background}>
    <TouchableOpacity
            onPress={onPress}
            style={styles.cardLockedLEvel}>
            <Text style={styles.title}>{data.level}</Text>
        </TouchableOpacity>
    </View>
);
// create a component
const QuizMenu = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.bgImage}>
                    {/* <Image style={{width: "100%",height: windowHeight/1.5,resizeMode: 'contain', left: - windowWidth/2,}} source={require('../assets/bgTree.png')} /> */}
                    <Image style={{ position: 'absolute', top: 110, resizeMode: 'contain', width: windowWidth, height: '100%', left: - windowWidth * 0.55 }} source={require('../assets/tree.png')} />
                </View>
                <FlatList
                    data={quiz}
                   
                    style={{ width: '100%', alignContent: 'center', position: 'absolute', marginTop: 30 ,flex:1,height: windowHeight,}}
                    renderItem={
                        ({ item }) => <CardItem data={item}
                            onPress={() => navigation.navigate("Quiz", { itemId: item.id })}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#DBF0FB',
        flex:1
    },
    bgImage: {
        height: windowHeight,
        // backgroundColor: 'red'
    },
    cardLockedLEvel: {
        height: 150,
        margin: 5,
        marginRight: 15,
        width: '70%',
        alignSelf: "flex-end",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // position:'relative'
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        blurRadius: 22,
        borderRadius:20,
        
    },
    cardUnlockedLevel: {

    },
    background: {
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
     
        // backgroundColor:''
      
      },
});

//make this component available to the app
export default QuizMenu;
