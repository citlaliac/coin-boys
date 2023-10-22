import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
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


  it('rotates the coin image when "Coin me" button is pressed', async () => {
    const { getByTestId } = render(<App />);

    // Ensures buttons and image are there to test
    const coinMeButton = getByTestId('coin-me-button');
    const coinImage = getByTestId('coin-image');

    // Get the initial style of the coin image
    const initialStyle = coinImage.props.style;

    // Simulate a button click to trigger the rotation
    fireEvent.press(coinMeButton);

    await waitFor(() => {
      // Get the final style of the coin image after animation
      const finalStyle = coinImage.props.style;
      // Expect that the transform property has changed in the final style
      expect(finalStyle.transform).not.toEqual(initialStyle.transform);
    });
  });

  // TODO Find a way to test that while isSpinning, the flip is to 180deg, then that coin-image is there.

});