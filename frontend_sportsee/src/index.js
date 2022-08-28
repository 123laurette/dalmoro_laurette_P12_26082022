import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavH from "./components/nav/Nav_h"
import NavV from "./components/nav/Nav_v"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavH />
      <NavV />
      <Dashboard />
    </BrowserRouter>
  </React.StrictMode>
);


//<Route path="/userData/:userId" element={<Dashboard />} />

