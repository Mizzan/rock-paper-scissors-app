import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './src/PlayScreen';

export default function App() {
  const [game, setGame] = useState(false);
  return (
      game ?   
        <PlayScreen />
      :
        <View style={styles.container}>
          <Text style={styles.header}>What Going on in Your Life?</Text>
          <Text style={styles.emojiStyle}>✊✋✌</Text>
          <View style={styles.btnStyle}>
            <Button title="Play" onPress={()=> setGame(true)}/>
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
