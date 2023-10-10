import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';
import coinFlipper from './logic/coinFlipper';
import CoinType from './assets/CoinTypes';

export default function App() {

  // set state
  const [coinType, setCoinType] = useState(CoinType.freshCoin);
  console.log(coinType); //todo remove
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage
        coinType={coinType == null ? CoinType.freshCoin : coinType}
        style={[styles.coinImageImage]} //{ transform: [{ rotate: coinSpinner() }] }]} ---> removing spin for now, not part of MVP
      />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => {setCoinType(coinFlipper())}}
        style={[styles.coinMeButtonText, styles.coinMeButtonView]}
      />

    </View>
  );
}

