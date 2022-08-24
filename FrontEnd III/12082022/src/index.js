import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './container/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer style={{textAlign:"inherit"}}>Equipo2</footer>
  </React.StrictMode>
);

