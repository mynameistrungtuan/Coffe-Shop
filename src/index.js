import React from 'react';
import ReactDOM from 'react-dom/client';
import CardNews from './components/cardNews/cardNews';
import './index.css';
import Home from './pages/home/home';
import News from './pages/News/news';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


