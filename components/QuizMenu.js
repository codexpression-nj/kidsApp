//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { quiz } from '../services/data';

const CardItem = ({data,onPress}) => (
    <TouchableOpacity
    onPress={ onPress}
     style={styles.cardLockedLEvel}>
      <Text style={styles.title}>{data.level}</Text>
    </TouchableOpacity>
  );
// create a component
const QuizMenu = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={quiz}
                 renderItem ={
                    ({item}) => <CardItem data={item} 
                    onPress={() => navigation.navigate("Details", { itemId: item.id })}
                    />
                }
            />
            <Image style={styles.bgImage} source={require('../assets/bgTree.png')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage:{
        marginTop:20,
        height: '100%',
        resizeMode:'contain',
        left:'-55%'
    },
    cardLockedLEvel:{
        
    },
    cardUnlockedLevel:{

    }
});

//make this component available to the app
export default QuizMenu;
