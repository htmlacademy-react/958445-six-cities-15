import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { App } from './components';
import { CARDS_COUNT } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App cardsCount={CARDS_COUNT} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
