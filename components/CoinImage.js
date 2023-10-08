import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

export const CoinImage = (props) => {
    const [count, setCount] = useState(0);
   return (
        <View>
            <Image source={props.source} style={{ height: 220, width: 225 }}/>
       </View>
   );
}
//export const CoinImage;