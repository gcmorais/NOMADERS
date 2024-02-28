import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';

import NewPlatformModal from '../components/modal/newPlatformModal';
/* eslint-disable no-undef */

test('renders react component', async () => {
  render(
    <NewPlatformModal />,
  );
});
