import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import ReduxProvider from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
