import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const PlayScreen = () => {
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setCounter((prev) => prev - 1);
    // }, 500);
  }, [counter]);
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button onPress={() => setCounter - 1} title="Click Me" />
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
});

export default PlayScreen;
