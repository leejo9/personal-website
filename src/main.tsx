import React from 'react';

import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import StartTop from './components/pagetopfix';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter >
      <StartTop />
      <App />
    </HashRouter >
  </React.StrictMode>
);
