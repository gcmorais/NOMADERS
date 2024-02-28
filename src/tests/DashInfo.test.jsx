import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import DashInfo from '../components/dashInfo';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <DashInfo headerText="Lucro Mensal" mainValue="R$ 7,500" footerValue="4%" footerText="nos lucros mensais" icon="red" />,
  );
});
