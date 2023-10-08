//Eventually do this in TSC and have complie to JS
// Goal: Display the coin face
// If random generator heads, show head
// If random generator tails, show tails
// Do not show while coin spinning


//Imports
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

//images
const headsCoin = require('../assets/coin-heads.png');
const tailsCoin = require('../assets/coin-tails.png');

//Images
// const CoinType {
//     HEADSCOIN: headsCoin,
//     TAILSCOIN: tailsCoin, 
// }


//functions
function CoinFlipper() {
    let coinType;
    const randomNumber = Math.random();

    if (randomNumber > .5) {
        coinType = headsCoin
    } else {
        coinType = tailsCoin
    }

    return coinType;
}

const CoinDisplay = () => {
    return (
        <View>
            <Image source={CoinFlipper()} style={{ height: 220, width: 225 }} />
            <View>
                    <Button
                      onPress={() => { <Image source={CoinFlipper()} style={{ height: 220, width: 225 }} />}} title="Coin Me"
                    />
                </View>
        </View>
    );
}
export default CoinDisplay;

