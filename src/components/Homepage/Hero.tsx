import React from 'react';
import SearchBar from '../Shared/SearchBar';
import './Hero.css';

const Hero: React.FC = () => {
  const heroText = 'Epicure works with the top chef restaurants in Tel Aviv';

  return (
    <div className='hero-wrapper'>
        <div className='hero-inside-wrapper'>
            <span className='hero-text'>
                {heroText}
            </span>
            <SearchBar />
        </div>
    </div>
  );
};

export default Hero;