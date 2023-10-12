import React from 'react';
import { View, Image, Animated, } from 'react-native';

// An Image to display the coin face 

const CoinImage = (props) => {
  const { coinType, style } = props;
  return (
    <View>
      <Image
        source={coinType}
        style={[
          style,
        ]} />
    </View>
  );
}
export default CoinImage;

