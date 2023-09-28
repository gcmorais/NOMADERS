import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import test from 'node:test';
import HeaderApp from '../components/headerApp';
import ThemeProvider from '../contexts/ThemeContext';
import { ColorContextProvider } from '../contexts/ThemeMaterial';

/* eslint-disable no-undef */

const Header = () => {
  render(
    <ThemeProvider>
      <ColorContextProvider>
        <HeaderApp />
      </ColorContextProvider>
    </ThemeProvider>,
  );
};

test('should toggler theme', () => {
  Header();

  const button = screen.getByTestId('theme-toggler');
  expect(button).toHaveStyle(
    { backgroundColor: 'rgb(243 250 255 / var(--tw-bg-opacity))' },
  );

  fireEvent.click(button);
  expect(button).toHaveStyle(
    { backgroundColor: 'rgb(28 36 56 / var(--tw-bg-opacity))' },
  );
});
