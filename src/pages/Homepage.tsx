/* eslint-disable */
import React from 'react';
import './Homepage.scss';

import mockData from '../mock-data.json';
import Header from '../components/Shared/Header';
import Hero from '../components/Homepage/Hero';
import CardsSection from '../components/Homepage/CardsSection';
import IconsDict from '../components/Homepage/IconsDict';
import ChefOfTheWeek from '../components/Homepage/ChefOfTheWeek';
import AboutUs from '../components/Homepage/AboutUs';
import Footer from '../components/Shared/Footer';
import HomepageSection from '../components/Homepage/HomepageSection';

const Homepage: React.FC = () => {
  
  return (
    <div className='homepage-wrapper'>
      <HomepageSection section='hero'>
        <Hero />
      </HomepageSection>
      <HomepageSection section='cardsSection'>
        <CardsSection popularRestaurants={mockData.popularRestaurants} signatureDishes={mockData.signatureDishes} />
      </HomepageSection>
      <HomepageSection section='iconsDict'>
        <IconsDict />
      </HomepageSection>
      <HomepageSection section='chefOfTheWeek'>
        <ChefOfTheWeek chefOfTheWeekData={mockData.chefOfTheWeekData} chefOfTheWeekRestaurants={mockData.chefOfTheWeekRestaurants} />
      </HomepageSection>
      <HomepageSection section='aboutUs'>
        <AboutUs aboutUsText={mockData.AboutUsText} />
      </HomepageSection>
    </div>
  );
};

export default Homepage;
