/* eslint-disable */
import React from "react";
// import styles from './Homepage.module.scss';

import mockData from "../mock-data.json";
import Section from "../components/Shared/Section";

import Hero from "../components/Homepage/Hero";
import CardsSectionRes from "../components/Homepage/CardsSectionRes";
import CardsSectionDishes from "../components/Homepage/CardsSectionDishes";
import IconsDict from "../components/Homepage/IconsDict";
import ChefOfTheWeek from "../components/Homepage/ChefOfTheWeek";
import AboutUs from "../components/Homepage/AboutUs";

const Homepage: React.FC = () => {
  return (
    <div className="homepage-wrapper">
      <Section section="hero">
        <Hero />
      </Section>

      <Section section="cardsSection">
        <div>
          <CardsSectionRes />
        </div>
      </Section>

      <Section section="cardsSection">
        <div data-aos="fade-left" data-aos-duration="1000">
          <CardsSectionDishes />
        </div>
      </Section>

      <Section section="iconsDict">
        <div data-aos="fade-right" data-aos-duration="1000">
          <IconsDict />
        </div>
      </Section>

      <Section section="chefOfTheWeek">
        <div data-aos="fade-up" data-aos-duration="1000">
          <ChefOfTheWeek
            chefOfTheWeekData={mockData.chefOfTheWeekData}
            chefOfTheWeekRestaurants={mockData.chefOfTheWeekRestaurants}
          />
        </div>
      </Section>

      <Section section="aboutUs">
        <div data-aos="fade-up" data-aos-duration="1000">
          <AboutUs aboutUsText={mockData.AboutUsText} />
        </div>
      </Section>
    </div>
  );
};

export default Homepage;
