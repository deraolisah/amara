import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Socials from './components/Socials/Socials';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Socials/>
    <About/>
    <Portfolio />
    <Footer/>
    </>
  )
}

export default App
