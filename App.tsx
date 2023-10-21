import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';
import coinFlipper from './logic/coinFlipper';
import CoinType from './assets/CoinTypes';
//import coinFlipAndSet from './logic/coinFlipAndSet';

export default function App() {

  // Set state
  const [coinType, setCoinType] = useState(CoinType.freshCoin || '');
  const [isSpinning, setIsSpinning] = useState(false);
  const rotationValue = new Animated.Value(0);

  const coinFlipAndSet = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setCoinType(coinFlipper());
    }, 250);
  };

  console.log("cointype: ", coinType); // TODO remove
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage
        coinType={coinType == null ? CoinType.freshCoin : coinType}
        style={[ isSpinning && styles.coinImageSpinning
        || styles.coinImageImage, 
        ]}
          
      />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => { coinFlipAndSet(); }}
        disabled={isSpinning}
        // TODO clean up button disabled
        // maybe access these not via their indeces
        style={[isSpinning && styles.coinButtonTextWhileSpinning || styles.coinMeButtonText, isSpinning && styles.coinButtonViewDisabledDuringSpin || styles.coinMeButtonView]}
      />

    </View>
  );
}


  // TODO not quite spinning the coin, leaving to investigate at a later time, 
  // the above does get a single "flip"
  // const coinFlipAndSet = () => {
  //   setIsSpinning(true);
  //   Animated.timing(rotationValue, {
  //     toValue: 180, // The value you want to rotate to (360 degrees for a full rotation)
  //     duration: 500, // Animation duration in milliseconds
  //     useNativeDriver: false, // Set to true if possible to improve performance
  //   }).start(() => {
  //     // Perform any other logic after the spin completes
  //     setIsSpinning(false);
  //     setCoinType(coinFlipper());
  //   });
  // };


  // Keeping in conjunction with alternate coinFlipAndSet function to use in CoinImage styles
  // {
  // height: 220,
  // width: 225,
  // objectFit: 'scale-down',
  // transform: [{ rotate: '180deg' }],
  // transform: [{
  //   rotate: rotationValue.interpolate({
  //     inputRange: [0, 180],
  //     outputRange: ['0deg', '180deg'],
  //   })
  // }]
  // } 