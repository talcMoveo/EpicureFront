import React from 'react';
import logo from './logo.svg';
import './App.css';
import './normalize.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
