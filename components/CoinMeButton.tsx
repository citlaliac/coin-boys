import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';

type CoinMeButtonProps = {
  title: string;
  onPress: () => void;
  style?: [StyleProp<TextStyle>?, StyleProp<ViewStyle>?, StyleProp<ViewStyle>?];
  disabled?: boolean;
};

// A button that will change the coin face in CoinImage

const CoinMeButton = (props: CoinMeButtonProps) => {
  const { title, onPress, style, disabled } = props;
  const textStyle = style?.[0];
  const containerStyle = style?.[1];
  const buttonStyle = style?.[2];

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={buttonStyle}
        testID='coin-me-button'>
        <Text
          style={textStyle}>
          {title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CoinMeButton;
