import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import HeaderApp from '../components/headerApp';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <HeaderApp />,
  );
});
