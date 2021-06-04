import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const rock = require('./sign/rock.png');
const paper = require('./sign/paper.png');
const scissors = require('./sign/scissors.png');

const randomImages = () => {
  const emojis = [rock, paper, scissors];
  const randomEmoji = Math.round(Math.random()*3);
  return emojis[randomEmoji];
}

const bgColor = ["#c0392b","#16a085", "#2ecc71"];

const PlayScreen = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if(counter < 1){
      return;
    }

    const timer = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [counter]);

  return (
    <View style={StyleSheet.compose({backgroundColor: bgColor[counter - 1]},styles.container)}>
      {
        (counter < 1) ?
        <>
          <Image style={styles.sign} source={randomImages()}/>
          <View style={styles.buttonStyle}>
            <Button onPress={() => setCounter(3)} title="Play Again" />
          </View>
        </>
      : 
        <Text style={styles.counter}>{counter}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 150,
    color: 'white',
  },
  buttonStyle: {
    marginTop: 100,
    width: 300,
  },
  sign:{
    width: 250,
    height: 250,
  }
});

export default PlayScreen;
