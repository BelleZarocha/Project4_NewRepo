import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceworker from './serviceworker';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Register from './components/Register/Register'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</React.StrictMode>
);
serviceworker.unregister();