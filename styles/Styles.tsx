import React from 'react';
import { StyleSheet, Animated } from 'react-native';

const rotationValue = new Animated.Value(0);

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinMeButtonText: {
        color: 'green',
        fontSize: 24,
    },
    coinButtonTextWhileSpinning: {
        color: 'green',
        opacity: .25,
        fontSize: 24,
    },
    coinMeButtonView: {
        backgroundColor: '#064600',
        borderRadius: 50,
        padding: 8,
        paddingHorizontal: 32,
        marginTop: 48,
    },
    coinButtonViewDisabledDuringSpin: {
        backgroundColor: '#064600',
        borderRadius: 50,
        padding: 8,
        paddingHorizontal: 32,
        marginTop: 48,
        enabled: false,
    },
    coinImageImage: {
        height: 220,
        width: 225,
        objectFit: 'scale-down',
    },
    coinImageSpinning: {
        height: 220,
        width: 225,
        objectFit: 'scale-down',
        transform: [{ rotate: '180deg' }],
    },
});

export default styles;
