/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';

import { ColorContextProvider } from './contexts/ThemeMaterial';
import ThemeProvider from './contexts/ThemeContext';
import ApiProvider from './contexts/ApiContext';

function App() {
  return (
    <ThemeProvider>
      <ColorContextProvider>
        <PrismaneProvider>
          <BrowserRouter>
            <ApiProvider>
              <Rotas />
            </ApiProvider>
          </BrowserRouter>
        </PrismaneProvider>
      </ColorContextProvider>
    </ThemeProvider>

  );
}

export default App;
