import React from 'react';

// pages imports
import Home from './home';
import Overview from './overview';
import Integration from './integration';
import Devices from './devices';
import Pricings from './pricings';
import Faq from './faq';
import Start from './start';

function Layout() {
  return (
    <main>
      <Home />
      <Overview />
      <Integration />
      <Devices />
      <Pricings />
      <Faq />
      <Start />
    </main>
  );
}

export default Layout;
