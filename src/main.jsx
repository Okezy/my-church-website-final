// src/main.jsx (FINAL CORRECTED CODE)
// Removed: import React from 'react'; - This is often implicit in Vite/modern setups
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// We no longer need to import HashRouter here, 
// as it will be imported and used directly inside App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  // Removed the HashRouter wrapper from main.jsx
  // The Router component is now inside App.jsx
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);