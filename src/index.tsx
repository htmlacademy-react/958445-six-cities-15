import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { App } from './components';
import { CITIES, OFFERS } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App city={CITIES[0]} offers={OFFERS} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
