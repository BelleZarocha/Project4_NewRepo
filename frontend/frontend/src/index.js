import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import * as serviceworker from './serviceworker';


const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path='/' components={App} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceworker.unregister();
reportWebVitals();
