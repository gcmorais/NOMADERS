/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import Home from './pages/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <PrismaneProvider>
      <Navbar />
      <Home />
    </PrismaneProvider>
  );
}

export default App;
