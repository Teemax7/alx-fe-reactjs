import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// This file is the entry point for the React application.
// It uses ReactDOM to render the App component inside a BrowserRouter,
// which enables routing capabilities in the application.