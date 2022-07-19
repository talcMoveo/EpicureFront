/* eslint-disable */

import React from 'react';
import './App.css';
import './normalize.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useSpring  } from 'react-spring';

import Homepage from './pages/Homepage';

function App() {

  const animation = useSpring({

  })
  
  return (
    <div className="App">
      <Homepage></Homepage>
    </div>
  );
}
export default App;
