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
    coinMeButtonView: {
        backgroundColor: '#064600',
        borderRadius: 50,
        padding: 8, 
        paddingHorizontal: 32, 
        marginTop: 48,
    }, 
    coinImageImage: {
        height: 220, 
        width: 225, 
        objectFit: 'scale-down',
    }
});

export default styles;
