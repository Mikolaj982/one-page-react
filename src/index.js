import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css'
import './style/index.css';
import './style/Nav.css'
import './style/Header.css'
import './style/Employees.css'
import './style/Services.css'
import './style/Footer.css'
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Employees from './components/Employees.js';
import Services from './components/Services.js';
import Footer from './components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Employees />
    <Services />
    <Footer /> 
  </React.StrictMode>
);


