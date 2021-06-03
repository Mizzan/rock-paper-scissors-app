import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={styles.emojiStyle}>✊✋✌</Text>
      <View style={styles.btnStyle}>
        <Button title="Play" />
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

  header: {
    fontSize: 40,
  },
  emojiStyle: {
    fontSize: 65,
    marginTop: 20,
    marginBottom: 20,
  },
  btnStyle: {
    marginTop: 30,
    width: 250,
  },
});
