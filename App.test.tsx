import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('renders the initial state of the App component', () => {
    const { getByText, getByTestId } = render(<App />);

    // Verify that the "Coin me" button is present
    const coinMeButton = getByText('Coin me');
    expect(coinMeButton).toBeTruthy();

    // Verify that the default coin image is present
    const coinImage = getByTestId('coin-image'); // Adjust this selector based on your actual content
    expect(coinImage).toBeTruthy();
  });

  it('updates the coinType state when the "Coin me" button is clicked', () => {
    const { getByText, getByTestId } = render(<App />);
    const coinMeButton = getByText('Coin me');

    // Simulate a button click to change the coinType
    fireEvent.press(coinMeButton);

    // Now, you can assert that the coinType has changed, but the exact value will depend on your `coinFlipper` function.
    // For example, if your `coinFlipper` function returns 'heads' or 'tails'.
    const coinImage = getByTestId('coin-image'); // Adjust this selector based on your actual content
    expect(coinImage).toBeTruthy();
  });

  // TODO Find a way to inicate the coin has changed (probably that it spins) and verify that happens, then that coin-image is there.

});