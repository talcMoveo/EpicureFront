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

const Homepage: React.FC = () => {
  return (
    <div className='homepage-wrapper'>
      <Header />
      <Hero />
      <CardsSection popularRestaurants={mockData.popularRestaurants} signatureDishes={mockData.signatureDishes} />
      <IconsDict />
      <ChefOfTheWeek chefOfTheWeekData={mockData.chefOfTheWeekData} chefOfTheWeekRestaurants={mockData.chefOfTheWeekRestaurants} />
      <AboutUs aboutUsText={mockData.AboutUsText} />
      <Footer />
    </div>
  );
};

export default Homepage;
