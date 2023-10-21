import React from 'react';
import { View, Animated } from 'react-native';


// An Image to display the coin face 

const CoinImage = (props) => {
  const { coinType, style, isSpinning } = props;
  return (
    <View>
      <Animated.Image
        source={coinType}
        style={[
          style 
        ]}
        testID='coin-image'
      />
    </View>
  );
}
export default CoinImage;

