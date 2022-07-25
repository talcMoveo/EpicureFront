/* eslint-disable */
import React from 'react';
import './Homepage.scss';

import mockData from '../mock-data.json';
import Hero from '../components/Homepage/Hero';
import IconsDict from '../components/Homepage/IconsDict';
import ChefOfTheWeek from '../components/Homepage/ChefOfTheWeek';
import AboutUs from '../components/Homepage/AboutUs';
import HomepageSection from '../components/Homepage/HomepageSection';
import CardsSectionRes from '../components/Homepage/CardsSectionRes';
import CardsSectionDishes from '../components/Homepage/CardsSectionDishes';

const Homepage: React.FC = () => {
  
  return (
    <div className='homepage-wrapper'>
      <HomepageSection section='hero'>
        <Hero />
      </HomepageSection>
      <HomepageSection section='cardsSection'>
        <div>
          <CardsSectionRes popularRestaurants={mockData.popularRestaurants} />
        </div>
      </HomepageSection>
      <HomepageSection section='cardsSection'>
        <div data-aos="fade-left" data-aos-duration="1000">
          <CardsSectionDishes signatureDishes={mockData.signatureDishes} />
        </div>
      </HomepageSection>
      <HomepageSection section='iconsDict'>
        <IconsDict />
      </HomepageSection>
      <HomepageSection section='chefOfTheWeek'>
        <ChefOfTheWeek chefOfTheWeekData={mockData.chefOfTheWeekData} chefOfTheWeekRestaurants={mockData.chefOfTheWeekRestaurants} />
      </HomepageSection>
      <HomepageSection section='aboutUs'>
        <div data-aos="flip-up" data-aos-duration="1000">
          <AboutUs aboutUsText={mockData.AboutUsText} />
        </div>
      </HomepageSection>
    </div>
  );
};

export default Homepage;
