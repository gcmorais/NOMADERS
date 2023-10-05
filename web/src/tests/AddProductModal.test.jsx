import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import AddProductModal from '../components/modal/addProductModal';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <AddProductModal />,
  );
});
