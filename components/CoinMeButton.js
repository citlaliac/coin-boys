import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CountMeButton = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
           <Button
             onPress={() => {}} title="Coin Me"
           />
           <Text>You clicked me {count} times</Text>
       </View>
   );
}
export default CountMeButton;