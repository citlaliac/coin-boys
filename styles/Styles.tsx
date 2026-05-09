import React from 'react';
import { StyleSheet } from 'react-native';

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
        opacity: 0.6,
    },
    coinImageImage: {
        height: 220,
        width: 225,
    },
    resultText: {
        color: '#8cff8c',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 20,
    },
});

export default styles;
