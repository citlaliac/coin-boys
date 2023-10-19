import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CoinMeButton from './CoinMeButton';
import Styles from '../styles/Styles';

// Tests for Coin Me Button
test('renders CoinMeButton component with the correct title', () => {
  const title = 'Coin me';
  const onPress = jest.fn(); // Mock the onPress function

  // Render the CoinMeButton component with the provided props
  const { getByText } = render(
    <CoinMeButton title={title} onPress={onPress} style={[Styles.coinMeButtonText]} />
  );

  // Verify that the button with the correct title is present
  const buttonElement = getByText(title);
  expect(buttonElement).toBeTruthy();
});

test('calls the onPress function when the button is pressed', () => {
  const title = 'Coin me';
  const onPress = jest.fn(); // Mock the onPress function

  const { getByTestId } = render(
    <CoinMeButton title={title} onPress={onPress} style={[[Styles.coinMeButtonText]]} />
  );

  // Simulate a button press
  const buttonElement = getByTestId('coin-me-button');
  fireEvent.press(buttonElement);

  // Check if the onPress function has been called
  expect(onPress).toHaveBeenCalled();
});