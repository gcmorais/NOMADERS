/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PrismaneProvider>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </PrismaneProvider>
    </ThemeProvider>
  );
}

export default App;
