import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';



export default function App() {

  // Images
  const headsCoin = require('./assets/coin-heads.png');
  const tailsCoin = require('./assets/coin-tails.png');
  const sideCoin = require('./assets/coin-side.png');

  // set state
  const [coinType, setCoinType] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage 
        coinType={coinType == '' ? sideCoin : coinType}
        onChangeCoinImage={setCoinType}
        />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => setCoinType(Math.random() > .5 ? headsCoin : tailsCoin)}
        //style={styles.button}
      />

    </View>
  );
}

