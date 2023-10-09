import React from 'react';
import { View, Button } from 'react-native';

// A button that will change the coin face in CoinImage

const CoinMeButton = (props) => {
  const { title, onPress, style } = props;
  return (
    <View>
      <Button
        title={title}
        onPress={onPress}
        //style={style}
      />
    </View>
  );
}
export default CoinMeButton;
