import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// A button that will change the coin face in CoinImage

const CoinMeButton = (props) => {
  const { title, onPress, style, disabled } = props;
  return (
    <View style={style[1]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled} // TODO is this working? What does disabled TOpcty look like?
        style={ style[2] }
        testID='coin-me-button'>
        <Text
          style={style[0]}>
          {title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CoinMeButton;
