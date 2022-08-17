/* eslint-disable */
import React, { useEffect } from 'react';
import './App.css';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

import Homepage from './pages/Homepage';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <Homepage></Homepage>
      <Footer />
    </div>
  );
}
export default App;
