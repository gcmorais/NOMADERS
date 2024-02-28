import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import Table from '../components/table';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <Table />,
  );
});
