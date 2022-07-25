/* eslint-disable */
import React, { useState } from 'react';

import './Hero.scss';
import search from '../../assets/Header/searchLogo.svg';
import erase from '../../assets/General/x.svg';

const Hero: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState('');

  const handleChange = (event: any) => {
    setEnteredInput(event.target.value);
  };

  const eraseClickHandler = () => {
    setEnteredInput('');
  };

  return (
    <div className='hero-wrapper'>
      <div className='hero-inside-wrapper'>
        <span className='hero-text'>
            Epicure works with the top
            chef restaurants in Tel Aviv
        </span>
        <div className='hero-input-div'>
          <img className='search-img' src={search} />
          <input
            className='hero-input'
            placeholder='Search for restaurant cuisine, chef'
            onChange={(event) => handleChange(event)}
            value={enteredInput}
          />
          {
            (enteredInput.trim().length !== 0) &&
            <img className='erase-img' src={erase} onClick={eraseClickHandler}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;