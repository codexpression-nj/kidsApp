//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { animalData } from '../services/data';

// create a component
const AnimalItem = ({data}) => (
   
    <TouchableOpacity style={[styles.card, {backgroundColor:data.backgroundColor}]}>
      <Text style={styles.title}>{data.name}</Text>
      <Image style={styles.image} source={data.image}/>
    </TouchableOpacity>
  );
  
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{width:'100%'}}
                data={animalData}
                renderItem ={
                    // console.log();
                    ({item}) => <AnimalItem data={item} />}
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
        // width:'40%',
        height: 90,
        margin:10,
        padding:10,
        borderRadius: 16,
    },
    image:{
        height: 100,
        width: 100,
        resizeMode:'contain'
    }
});

//make this component available to the app
export default Home;
