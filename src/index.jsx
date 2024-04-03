import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Presentation />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Router>
  </React.StrictMode>
);
