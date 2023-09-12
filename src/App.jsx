/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <PrismaneProvider>
      <Navbar />
      <Home />
      <Footer />
    </PrismaneProvider>
  );
}

export default App;
