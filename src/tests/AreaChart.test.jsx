import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import AreaChart from '../components/chart/areaChart';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <AreaChart />,
  );
});
