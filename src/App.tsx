/* eslint-disable */

import React from 'react';
import './App.css';
import './normalize.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useSpring  } from 'react-spring';

import Homepage from './pages/Homepage';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';

function App() {

  const animation = useSpring({

  })
  
  return (
    <div className="App">
      <Header />
      <Homepage></Homepage>
      <Footer />
    </div>
  );
}
export default App;
