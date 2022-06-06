import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/home';
import Card from './components/card/card';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


