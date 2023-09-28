import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import AddToggleMenu from '../components/table/addToggleMenu';
/* eslint-disable no-undef */

const Dashboard = () => {
  render(
    <AddToggleMenu />,
  );
};

test('should render component', async () => {
  Dashboard();
});
