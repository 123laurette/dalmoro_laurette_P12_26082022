import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import NavH from "./components/nav/Nav_h"
import NavV from "./components/nav/Nav_v"
import Dashboard from "./pages/Dashboard"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <NavH />
      <NavV />
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
  </BrowserRouter>  

);
//supprimé React.StricMode, car cela me doublait les réponses console
