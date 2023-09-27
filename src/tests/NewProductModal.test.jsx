import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import NewProductModal from '../components/modal/newProductModal';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <NewProductModal />,
  );
});
