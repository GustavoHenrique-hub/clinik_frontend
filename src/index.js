
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alterar from './pages/alterar/alterar';
import Insert from './pages/inserir/inserir';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Busca />
  </React.StrictMode>
);
