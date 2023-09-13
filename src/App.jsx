/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';

function App() {
  return (
    <PrismaneProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </PrismaneProvider>
  );
}

export default App;
