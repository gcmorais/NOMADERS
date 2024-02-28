import {
  fireEvent, render, screen, waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import '../../.jest/mocks/intersectionObserverMock';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DashMenu from '../components/dashMenu';
/* eslint-disable no-undef */

const Dashboard = () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <DashMenu />
    </Router>,
  );
};

test('should render component', async () => {
  Dashboard();
});

test('should open and close pop-up', async () => {
  Dashboard();

  const open = screen.getByTestId('open-popup');
  fireEvent.click(open);

  expect(screen.getByTestId('popup-is-open')).toBeInTheDocument();

  const close = screen.getByTestId('close-popup');
  fireEvent.click(close);

  await waitForElementToBeRemoved(screen.getByTestId('popup-is-open'));
});
