import { render } from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DashMenu from '../components/dashMenu';
/* eslint-disable no-undef */

test('renders react component', async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <DashMenu />
    </Router>,
  );
});
