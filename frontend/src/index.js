// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional global styling
import App from './App'; // Main App component

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
