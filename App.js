import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';



export default function App() {

  //images
  const headsCoin = require('./assets/coin-heads.png');
  const tailsCoin = require('./assets/coin-tails.png');
  const sideCoin = require('./assets/coin-side.png');

  // set state
  const [coinType, setCoinType] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoinImage 
        coinType={coinType == '' ? sideCoin : coinType} />
      <CoinMeButton
        title={'Coin me'}
        onPress={() => setCoinType(Math.random() > .5 ? headsCoin : tailsCoin)}
      />

    </View>
  );
}

//Components
export const CoinImage = (props) => {
  const {coinType} = props;
  return (
    <View>
      <Image
        source={coinType}
        style={{ height: 220, width: 225 }} />
    </View>
  );
}

export const CoinMeButton = (props) => {
  const { title, onPress } = props;
  return (
    <View>
      <Button
        title={title}
        onPress={onPress}
        color='green'
      />
    </View>
  );
}



//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

