import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { CITY, OFFERS } from './mocks';
import { App } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App city={CITY} offers={OFFERS} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
