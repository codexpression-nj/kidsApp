//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from "react-native-elements";
import shuffle from "lodash.shuffle";
import { animals } from '../services/data';
// create a component
const word = "example";

const ScrambleWordsGame = () => {
    const [currentWord, setCurrentWord] = useState("");
    const [question, setQuestion] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [score, setScore] = useState(0);
    const [image, setImage] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const letters = scrambledWord.split("");
    // const letters = word.split("");
    useEffect(() => {
        getNextWord();
    }, []);
    const getNextWord = () => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const word = animals[randomIndex].name;
        const pic = animals[randomIndex].image
        const question = animals[randomIndex].question
        setImage(pic)
        setCurrentWord(word);
        setQuestion(question)
        setScrambledWord(shuffle(word.split("")).join(""));
    };
    const checkAnswer = (answer) => {
        const isCorrectAnswer = answer.toLowerCase() === currentWord.toLowerCase();
        setIsCorrect(isCorrectAnswer);
        setScore(isCorrectAnswer ? score + 1 : score);
        getNextWord();
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image}/>
            </View>
            <Text style={styles.title}>Hi friend! I forgit my name, please help me remember it</Text>
            <View style={styles.wordContainer}>
                <Text style={styles.word}>{question}</Text>
            </View>
            <View style={styles.lettersContainer}>
                    {letters.map((letter, index) => (
                        <TouchableOpacity style={styles.letter}>
                            <Text style={{fontWeight:'bold',fontSize:24,}} key={index}>{letter}</Text>
                        </TouchableOpacity>

                    ))}
                 
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    title='Next'
                    onPress={() => checkAnswer(currentWord)}
                    buttonStyle={[styles.button, isCorrect && styles.correctButton]}
                    titleStyle={styles.buttonText}
                />
            </View>
            {/* <Text style={styles.score}>Score: {score}</Text> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    wordContainer: {
        marginVertical: 20
    },
    word: {
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: 5
    },
    buttonContainer: {
        marginBottom: 20
    },
    button: {
        backgroundColor: "#3498db",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    correctButton: {
        backgroundColor: "#2ecc71"
    },
    letter: {
        // flex: 1,
        backgroundColor:'#F6F6F6',
        margin:10,
        borderRadius: 20,
        width: 60,
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        height: 60,
        


    },
    lettersContainer:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        alignItems:'center',
        display:'flex',
        alignContent:'center',
        height: 200,
    },
    image:{
        width: 130,
        height: 130,
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf:'center',
    },
    imageContainer:{
        backgroundColor:'#A2CB7B',
        width: 120,
        height: 120,
        borderRadius:50,
        justifyContent:'center',
        marginBottom:50
    },
    title:{
        width: '50%',
        textAlign:'center'
    }
});

//make this component available to the app
export default ScrambleWordsGame;
