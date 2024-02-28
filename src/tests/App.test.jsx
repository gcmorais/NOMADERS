import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';
import '../../.jest/mocks/intersectionObserverMock';

/* eslint-disable no-undef */
describe('Jest', () => {
  it('should display elements', () => {
    render(<App />);
  });
});
