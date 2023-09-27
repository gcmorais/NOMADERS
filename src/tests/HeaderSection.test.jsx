import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import HeaderSection from '../components/headerSection';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <HeaderSection title="Test" subtitle="Test" />,
  );
});
