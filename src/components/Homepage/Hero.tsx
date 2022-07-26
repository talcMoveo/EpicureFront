/* eslint-disable */
import React, { useState } from 'react';
import styles from '../../styles/Homepage/Hero.module.scss';

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
    <div className={styles['hero-wrapper']}>
      <div className={styles['hero-inside-wrapper']}>
        <span className={styles['hero-text']}>
            Epicure works with the top
            chef restaurants in Tel Aviv
        </span>
        <div className={styles['hero-input-div']}>
          <img className={styles['search-img']} src={search} />
          <input
            className={styles['hero-input']}
            placeholder='Search for restaurant cuisine, chef'
            onChange={(event) => handleChange(event)}
            value={enteredInput}
          />
          {
            (enteredInput.trim().length !== 0) &&
            <img className={styles['erase-img']} src={erase} onClick={eraseClickHandler}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;