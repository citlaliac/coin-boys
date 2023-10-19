import React from 'react';
import { View, Image, Animated, } from 'react-native'; // TODO add animatin or remove 'Animated'

// An Image to display the coin face 

const CoinImage = (props) => {
  const { coinType, style } = props;
  return (
    <View>
      <Image
        source={coinType}
        style={[
          style,
        ]}
        testID='coin-image'
      />
    </View>
  );
}
export default CoinImage;

