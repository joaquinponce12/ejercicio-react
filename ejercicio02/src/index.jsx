import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Tarjeta } from './componentes/Tarjeta';
import { Objeto } from './componentes/Objeto';
import { Hoo } from './componentes/Hoo';
import { Objeto2 } from './componentes/Objeto2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hoo/>
    <Tarjeta estado={false}/>
    <Objeto/>
    <Objeto2/>
  </React.StrictMode>
);