import React, { useRef } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
} from 'react-native';
import CoinType from '../assets/CoinTypes';
import styles from '../styles/Styles';

type CoinImageProps = {
  coinType: CoinType;
  /** 0 = idle, animates to 1 during a flip */
  spinProgress?: Animated.Value;
  baseStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  disabled?: boolean;
};

const CoinImage = (props: CoinImageProps) => {
  const { coinType, onPress, disabled } = props;
  const fallbackSpin = useRef(new Animated.Value(0)).current;
  const spinProgress = props.spinProgress ?? fallbackSpin;
  const baseStyle = props.baseStyle ?? styles.coinImageImage;

  const rotateY = spinProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1440deg'],
  });
  const translateY = spinProgress.interpolate({
    inputRange: [0, 0.45, 0.55, 1],
    outputRange: [0, -14, -14, 0],
  });
  const scale = spinProgress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.08, 1],
  });

  const animatedStyle = {
    transform: [
      { perspective: 1000 },
      { translateY },
      { rotateY },
      { scale },
    ],
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled} testID='coin-image-pressable'>
        <Animated.Image
          source={coinType}
          style={[baseStyle, animatedStyle]}
          resizeMode='contain'
          testID='coin-image'
        />
      </TouchableOpacity>
    </View>
  );
};
export default CoinImage;
