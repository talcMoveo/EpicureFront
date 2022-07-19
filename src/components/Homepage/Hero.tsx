/* eslint-disable */
import React, { useState } from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation';

import './Hero.scss';
import search from '../../assets/Header/searchLogo.svg';
import erase from '../../assets/General/x.svg';

const Hero: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const heroText = ' restaurants in Tel Aviv';

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
          <BlockRevealAnimation>
            Epicure works with the top chef
          </BlockRevealAnimation>
          <BlockRevealAnimation>
            restaurants in Tel Aviv
          </BlockRevealAnimation>
        </span>
        <input className='hero-input' placeholder='Search for restaurant cuisine, chef' onChange={(event) => handleChange(event)} value={enteredInput} />
        <img className='search-img' src={search} />
        {(enteredInput.trim().length !== 0) && <img className='erase-img' src={erase} onClick={eraseClickHandler} />}
      </div>
    </div>
  );
};

export default Hero;
