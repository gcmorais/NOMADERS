import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import DonutChart from '../components/chart/donutChart';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <DonutChart />,
  );
});
