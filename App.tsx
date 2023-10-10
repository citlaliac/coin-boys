import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';



export default function App() {

  // Images
  enum CoinType {
    headsCoin = require('./assets/coin-heads.png'),
    tailsCoin = require('./assets/coin-tails.png'),
    headSideCoin = require('./assets/coin-head-side.png'),
    tailsSideCoin = require('./assets/coin-tails-side.png'),
    freshCoin = require('./assets/coin-side.png')
  }

  // Coin Flipper function to change coin image to new coin "land" upon flip
  function coinFlipper(): CoinType {
    const randomNumber: number = Math.random();

    //do coin logic
    if (randomNumber < .995 && randomNumber >= .5) { // 500-994
      return CoinType.headsCoin;
    } if (randomNumber > .005 && randomNumber < .5) { // 6-499
      return CoinType.tailsCoin;
    } if (randomNumber >= .995) { // 995-100
      return CoinType.headSideCoin;
    } if (randomNumber <= .005) { //0-5
      return CoinType.tailsSideCoin;
    } else {
      console.error('randomNumber value in coinFlipper was not set or value did not match any posible outcomes. Output of randomNumber: ' + randomNumber);
    };
  }

  //Rotate the image for funsies befor I can make it flip
  //todo probably pull out later to it's own file
  //todo need to get it to run before after button click, before new coin render
  const rotateValueHolder = new Animated.Value(0);
  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const startCoinImageRotationFunction = (): void => {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
  }

  // set state
  const [coinType, setCoinType] = useState(CoinType.freshCoin);
  console.log(coinType); //todo remove
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage
        coinType={coinType == null ? CoinType.freshCoin : coinType}
        style={[styles.coinImageImage, { transform: [{ rotate: RotateData }] }]}
      />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => {setCoinType(coinFlipper());}}
        style={[styles.coinMeButtonText, styles.coinMeButtonView]}
      />

    </View>
  );
}

