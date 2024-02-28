import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import ProductCards from '../components/productsCards';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <ProductCards platform="test" />,
  );
});
