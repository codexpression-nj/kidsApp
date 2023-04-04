//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { animalData } from '../services/data';

// create a component
const AnimalItem = ({data,onPress}) => (
   
    <TouchableOpacity
    onPress={ onPress}
     style={[styles.card, {backgroundColor:data.backgroundColor}]}>
      <Text style={styles.title}>{data.name}</Text>
      <Image style={styles.image} source={data.image}/>
    </TouchableOpacity>
  );

  
  
const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{width:'100%'}}
                data={animalData}
                renderItem ={
                    // console.log();
                    ({item}) => <AnimalItem data={item} 
                    onPress={() => navigation.navigate("Details", { itemId: item.id })}
                    />
                }
                    
                keyExtractor={item => item.id}
            />
        </SafeAreaView> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // width: 100,
    },
    card:{
        width:'85%',
        height: 100,
        margin:14,
        // padding:12,
        borderRadius: 26,
        alignSelf:'center'
    },
    image:{
        height: 100,
        width: 100,
        resizeMode:'contain',
        position: 'absolute',
        top: -23,
        // left: '-10%',
        // marginLeft: -30,
    },
    title:{
        alignSelf:'flex-end',
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textDecorationStyle:'solid',
        textShadowColor:'black',
        textShadowRadius:5,
        margin:16
    },
    header:{
        
    }
});

//make this component available to the app
export default Home;
