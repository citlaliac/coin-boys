import React from 'react';
import { View, Image } from 'react-native';

// An Image to display the coin face 

const CoinImage = (props) => {
    const {coinType} = props;
    return (
      <View>
        <Image
          source={coinType}
          style={{ height: 220, width: 225, objectFit: 'scale-down' }} />
      </View>
    );
}
export default CoinImage;

