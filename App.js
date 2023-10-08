import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image } from 'react-native';
import CountMeButton from './components/CountMeButton';
import CoinDisplay from './components/CoinDisplay';


export default function App() {
const pressedCount = 0;

  return (
    <View style={styles.container}>
      <CoinDisplay/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

