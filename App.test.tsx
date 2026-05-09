import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Animated } from 'react-native';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(Animated, 'timing').mockImplementation(() =>
      ({
        start: (callback?: (result: { finished: boolean }) => void) => {
          callback?.({ finished: true });
        },
        stop: jest.fn(),
        reset: jest.fn(),
      }) as unknown as Animated.CompositeAnimation,
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the initial state of the App component', () => {
    const { getByText, getByTestId } = render(<App />);

    const coinMeButton = getByText('Coin me');
    expect(coinMeButton).toBeTruthy();

    const coinImage = getByTestId('coin-image');
    expect(coinImage).toBeTruthy();
  });

  it('shows result text after the "Coin me" button is clicked', () => {
    const { getByText, getByTestId } = render(<App />);
    const coinMeButton = getByText('Coin me');

    expect(getByTestId('coin-result-text').props.children).toBe('Tap the coin or button to flip');

    act(() => {
      fireEvent.press(coinMeButton);
    });

    const text = getByTestId('coin-result-text').props.children;
    expect(['Heads', 'Tails', 'Edge hit! Flip again']).toContain(text);
  });

  it('allows tapping the coin image to trigger a flip', () => {
    const { getByTestId } = render(<App />);

    const coinPressable = getByTestId('coin-image-pressable');

    act(() => {
      fireEvent.press(coinPressable);
    });

    const text = getByTestId('coin-result-text').props.children;
    expect(['Heads', 'Tails', 'Edge hit! Flip again']).toContain(text);
  });
});
