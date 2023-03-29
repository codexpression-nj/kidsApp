//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { animalData } from '../services/data';

// create a component
const AnimalItem = ({data}) => (
   
    <View style={styles.item}>
      <Text style={styles.title}>{data.name}</Text>
      <Image style={styles.image} source={data.image}/>
    </View>
  );
  
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
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
    },
    card:{
        width:'90%',
        height: 90,
        backgroundColor: 'pink',
        margin:10
    },
    image:{
        height: 40,
        width: 90,
    }
});

//make this component available to the app
export default Home;
