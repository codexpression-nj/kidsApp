import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput, Image } from 'react-native';
import { quiz } from '../services/data';

// const words = [
//   { question: 'B_N_NA', answer: 'ANANA' },
//   { question: 'G_IR_F', answer: 'IRAFFE' },
//   { question: 'C_T', answer: 'AT' },
//   { question: 'H_R_E', answer: 'ORSE' },
//   { question: 'DO_', answer: 'OG' },
// ];

export default function Quiz({route}) {
  const { itemId, otherParam } = route.params;
  const getGame = quiz.find(quizQuestion => quizQuestion.id === itemId)
  const words = getGame.game
  console.log(words)
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(words[currentWordIndex].question);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const checkAnswer = () => {
    if (currentAnswer === words[currentWordIndex].answer) {
      setCurrentAnswer('');
      setCurrentWordIndex(currentWordIndex + 1);
      if (currentWordIndex === words.length - 1) {
        alert('Congratulations! You completed the game.');
        setCurrentWordIndex(0);
      } else {
        setCurrentQuestion(words[currentWordIndex + 1].question);
      }
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bground}>
        <Image style={styles.image} source={words[currentWordIndex].image}/>
      </View>
      <Text>Hi Freind </Text>
      <Text style={styles.question}>{currentQuestion}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentAnswer}
          onChangeText={(text) => setCurrentAnswer(text)}
          placeholder="Type your answer here"
          placeholderTextColor="#9E9E9E"
        />
        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    flex: 1,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bground:{
    backgroundColor:'#A2CB7B',
    width: 120,
    height: 120,
    borderRadius:50,
    justifyContent:'center',
    marginBottom:50
  },
  image:{
    width: 130,
    height: 130,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf:'center',

    // top: 50
  }
});