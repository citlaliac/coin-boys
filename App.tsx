import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import CoinMeButton from './components/CoinMeButton';
import CoinImage from './components/CoinImage';
import styles from './styles/Styles';
import coinFlipper from './logic/coinFlipper';
import CoinType from './assets/CoinTypes';

/** Match Jest fake timers to `Animated.timing` duration below */
export const COIN_FLIP_DURATION_MS = 880;

export default function App() {
  const [coinType, setCoinType] = useState(CoinType.freshCoin || '');
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultText, setResultText] = useState('Tap the coin or button to flip');
  const spinProgress = useRef(new Animated.Value(0)).current;

  const getCoinResultText = (nextCoinType: CoinType) => {
    if (nextCoinType === CoinType.headsCoin) {
      return 'Heads';
    }
    if (nextCoinType === CoinType.tailsCoin) {
      return 'Tails';
    }
    return 'Edge hit! Flip again';
  };

  const coinFlipAndSet = () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);
    setResultText('Flipping...');

    spinProgress.setValue(0);
    Animated.timing(spinProgress, {
      toValue: 1,
      duration: COIN_FLIP_DURATION_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) {
        return;
      }
      const nextCoinType = coinFlipper();
      setCoinType(nextCoinType);
      setResultText(getCoinResultText(nextCoinType));
      setIsSpinning(false);
      spinProgress.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage
        coinType={coinType == null ? CoinType.freshCoin : coinType}
        spinProgress={spinProgress}
        onPress={coinFlipAndSet}
        disabled={isSpinning}
      />
      <Text style={styles.resultText} testID='coin-result-text'>{resultText}</Text>
      <CoinMeButton
        title={'Coin me'}
        onPress={coinFlipAndSet}
        disabled={isSpinning}
        style={[
          isSpinning ? styles.coinButtonTextWhileSpinning : styles.coinMeButtonText,
          styles.coinMeButtonView,
          isSpinning ? styles.coinButtonViewDisabledDuringSpin : undefined,
        ]}
      />
    </View>
  );
}