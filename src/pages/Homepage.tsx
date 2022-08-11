/* eslint-disable */
import React from 'react';
import styles from './Homepage.module.scss';

import mockData from '../mock-data.json';
import Section from '../components/Shared/Section';

import Hero from '../components/Homepage/Hero';
import CardsSectionRes from '../components/Homepage/CardsSectionRes';
import CardsSectionDishes from '../components/Homepage/CardsSectionDishes';
import IconsDict from '../components/Homepage/IconsDict';
import ChefOfTheWeek from '../components/Homepage/ChefOfTheWeek';
import AboutUs from '../components/Homepage/AboutUs';
import HeroSearch from '../components/Homepage/HeroSearch';

const Homepage: React.FC = () => {
  
  return (
    <div className='homepage-wrapper'>

      <Section section='hero'>
        <Hero />
      </Section>

      <Section section='cardsSection'>
        <div>
          <CardsSectionRes popularRestaurants={mockData.popularRestaurants} />
        </div>
      </Section>

      <Section section='cardsSection'>
        <div data-aos="fade-left" data-aos-duration="1000">
          <CardsSectionDishes signatureDishes={mockData.signatureDishes} />
        </div>
      </Section>

      <Section section='iconsDict'>
        <IconsDict />
      </Section>

      <Section section='chefOfTheWeek'>
        <ChefOfTheWeek chefOfTheWeekData={mockData.chefOfTheWeekData} chefOfTheWeekRestaurants={mockData.chefOfTheWeekRestaurants} />
      </Section>

      <Section section='aboutUs'>
        <div data-aos="flip-up" data-aos-duration="1000">
          <AboutUs aboutUsText={mockData.AboutUsText} />
        </div>
      </Section>
      
    </div>
  );
};

export default Homepage;
