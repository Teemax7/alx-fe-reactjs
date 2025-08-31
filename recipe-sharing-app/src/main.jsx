// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// This file is the entry point for the React application, rendering the App component wrapped in BrowserRouter for routing support.
// It also imports global styles from index.css for consistent styling across the application.
// The React.StrictMode is used to highlight potential problems in the application, helping developers write better