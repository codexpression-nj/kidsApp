//import liraries
import React, { Component, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from "react-native-elements";
import shuffle from "lodash.shuffle";
import { animals } from '../services/data';
import LottieView from 'lottie-react-native';

// create a component
const word = "example";

const ScrambleWordsGame = ({navigation}) => {
    const animation = useRef(null);
    const [currentWord, setCurrentWord] = useState("");
    const [question, setQuestion] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [score, setScore] = useState(0);
    const [image, setImage] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [endGame, setEndGame] = useState(false);
    // let index = 1;
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
        setCurrentIndex(currentIndex + 1)
    };
    const checkAnswer = (answer) => {
        const isCorrectAnswer = answer.toLowerCase() === currentWord.toLowerCase();
        setIsCorrect(isCorrectAnswer);
        setScore(isCorrectAnswer ? score + 1 : score);
        console.log(currentIndex);
        if (currentIndex === animals.length) {
            animation.current?.play()
            setEndGame(true)
            
        } else {
            getNextWord();

        }

    };
    return (
        <View style={styles.container}>
            {endGame ? <LottieView
                autoPlay
                loop={false}
                // duration={300}
                ref={animation}
                style={styles.celebrateStars}
                speed={1}
                onAnimationFinish= { () => navigation.navigate('QuizMenu')}
                source={require('../assets/wellDone.json')}
            />
                : <>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={image} />
                    </View>

                    <Text style={styles.title}>Hi friend! I forgot my name, please help me remember it..</Text>
                    <View style={styles.wordContainer}>
                        <Text style={styles.word}>{question}</Text>
                    </View>
                    <View style={styles.lettersContainer}>
                        {letters.map((letter, index) => (
                            <TouchableOpacity style={styles.letter}>
                                <Text style={{ fontWeight: 'bold', fontSize: 24, }} key={index}>{letter}</Text>
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

                </>
            }



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
        backgroundColor: "#fff",
        // position:'relative'
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
        backgroundColor: '#F6F6F6',
        margin: 10,
        borderRadius: 20,
        width: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    lettersContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        alignItems: 'center',
        display: 'flex',
        alignContent: 'center',
        height: 200,
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'center',
    },
    imageContainer: {
        backgroundColor: '#A2CB7B',
        width: 120,
        height: 120,
        borderRadius: 50,
        justifyContent: 'center',
        marginBottom: 50
    },
    title: {
        width: '50%',
        textAlign: 'center'
    },
    celebrateStars: {
        position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // top: 0,
        width: 450,
        height: 410,
        // alignContent:"center",
        backgroundColor: 'transparent',
        // justifyContent:'center',
    }
});

//make this component available to the app
export default ScrambleWordsGame;
