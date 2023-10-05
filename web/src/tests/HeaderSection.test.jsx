import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import HeaderSection from '../components/headerSection';
/* eslint-disable no-undef */

test('renders react component', () => {
  render(
    <HeaderSection title="Test" subtitle="Test" />,
  );

  const button = screen.getByText(/download reports/i);

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
});
