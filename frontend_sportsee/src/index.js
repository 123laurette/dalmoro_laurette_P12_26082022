import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import NavH from "./components/nav/Nav_h"
import NavV from "./components/nav/Nav_v"
import Dashboard from "./pages/Dashboard"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavH />
      <NavV />
      <Dashboard />

  </React.StrictMode>
);


reportWebVitals();
