import React from 'react';
import './style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './section/accueil/Accueil';
import Competence from './section/competence/Competence';
import Apropos from './section/apropos/Apropos';
import Contact from './section/contact/Contact';
import Footer from './section/footer/Footer';
import Header from './components/layout/header/Header';

function App() {

  return (
    <div className="App">
      <div className="wrap_header">
        <Header />
      </div>
      <Accueil />
      <Competence />
      <Apropos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;