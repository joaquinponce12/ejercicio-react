import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Usuarios } from './Componentes/Usuarios';
import { Datos } from './Componentes/Datos';
import { Estudiante } from './Componentes/Estudiante';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Usuarios/>
    <Datos nombre="Joaquin"/>
    <Estudiante Nota="100"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals