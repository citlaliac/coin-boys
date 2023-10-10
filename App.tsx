import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';



export default function App() {

  // Images
  // const headsCoin = require('./assets/coin-heads.png');
  // const tailsCoin = require('./assets/coin-tails.png');
  // const sideCoin = require('./assets/coin-side.png');

  enum CoinType {
    headsCoin = require('./assets/coin-heads.png'),
    tailsCoin = require('./assets/coin-tails.png'),
    headSideCoin = require('./assets/coin-head-side.png'),
    tailsSideCoin = require('./assets/coin-tails-side.png'),
    freshCoin = require('./assets/coin-side.png')
  }

  function coinFlipper(): CoinType {
    const randomNumber =  Math.random();

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


  // set state
  const [coinType, setCoinType] = useState(CoinType.freshCoin);
  console.log(coinType);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage
        coinType={coinType == null ? CoinType.freshCoin : coinType}
        onChangeCoinImage={setCoinType}
      />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => setCoinType(coinFlipper())}
        style={[styles.coinMeButtonText, styles.coinMeButtonView]}
      />

    </View>
  );
}

