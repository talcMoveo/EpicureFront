import React from 'react';
import './Hero.css';

// import background from '../Assets/Hero/hero-picture.png';

const Hero: React.FC = () => {
  const heroText = 'Epicure works with the top chef restaurants in Tel Aviv';

  return (
    <div className='hero-wrapper'>
        <div className='hero-inside-wrapper'>
            <span className='hero-text'>
                {heroText}
            </span>
            Search bar placeholder
        </div>
    </div>
  );
};

export default Hero;