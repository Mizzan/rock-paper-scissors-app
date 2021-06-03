import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button style={styles.button} onPress={() => setCounter(3)} title="Play Again" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 150,
  },
  button: {
    fontSize: 36,
  },
});

export default PlayScreen;
