import { StrictMode } from 'react'
import React from 'react';

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StartTop from './components/pagetopfix';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StartTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
