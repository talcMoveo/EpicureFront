import React, { useState } from 'react';

import './Hero.css';
import search from '../../Assets/Header/searchLogo.svg';
import erase from '../../Assets/General/x.svg';


const Hero: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const heroText = "Epicure works with the top chef restaurants in Tel Aviv";

  const handleChange = (event: any) => {
    setEnteredInput(event.target.value);
  }

  const eraseClickHandler = () => {
    setEnteredInput('');
  }

  return (
    <div className='hero-wrapper'>
        <div className='hero-inside-wrapper'>
            <span className='hero-text'>
                {heroText}
            </span>
            <input placeholder='Search for restaurant cuisine, chef' onChange={event => handleChange(event)} value={enteredInput}/>
            <img className='search-img' src={search} />
            {(enteredInput.trim().length !== 0) && <img className='erase-img' src={erase} onClick={eraseClickHandler}/>}
        </div>
    </div>
  );
};

export default Hero;