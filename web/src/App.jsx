/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';

import { ColorContextProvider } from './contexts/ThemeMaterial';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ColorContextProvider>
        <PrismaneProvider>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </PrismaneProvider>
      </ColorContextProvider>
    </ThemeProvider>

  );
}

export default App;
