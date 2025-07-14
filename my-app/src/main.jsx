
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional

// Clear cart on page load (outside of React)
if (!sessionStorage.getItem("sessionStarted")) {
  localStorage.removeItem("cart");
  sessionStorage.setItem("sessionStarted", "true");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);