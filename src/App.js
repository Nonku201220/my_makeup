import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Hero/>
    <Slider/>
    <Virtual/>
    <Products/>
    <Footer/>
    </div>
  );
}

export default App;

