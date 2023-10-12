import { Animated, Easing } from 'react-native';

//Removing spin for now, will add in after tests. not part of MVP
//Rotate the image for funsies befor I can make it flip
//todo probably pull out later to it's own file
//todo need to get it to run before after button click, before new coin render
//todo need to add Animated back onto the Image in Coin Image (Animated.Image) when adding Spin back in
//todo need to pass transform rotate data to coinimage in App when adding spin back in

const coinSpinner = (): Animated.AnimatedInterpolation<string | number> => {
    const rotateValueHolder = new Animated.Value(0);
    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const startCoinImageRotationFunction = (): void => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }

    return RotateData;
}
export default coinSpinner;

//need to add stop, then export final animation function with a better name