import React from 'react';
import { render } from '@testing-library/react-native';
import CoinImage from './CoinImage'; // Import your CoinImage component

// Tests for CoinImage component
test('renders CoinImage component', () => {
  const coinType = require('../assets/coinPngs/coin-tails.png'); // Maybe figure out how to mock an image?
  const { getByTestId } = render(<CoinImage coinType={coinType}/>);
  
  // Use a "data-testid" attribute to uniquely identify the CoinImage component
  const coinImage = getByTestId('coin-image');
  
  // Check if the CoinImage component is present
  expect(coinImage).toBeTruthy();
});