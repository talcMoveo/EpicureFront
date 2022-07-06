import React from 'react';
import './Homepage.scss';

import Header from '../Shared/Header';
import Hero from './Hero';
import Chef from '../../models/chef';
import Restaurant from '../../models/restaurant';
import RestaurantCard from '../Shared/RestaurantCard';
import Dish from '../../models/dish';
import DishCard from '../Shared/DishCard';
import { features } from '../../models/featuresEnum';

import claro from '../../Assets/Restaurants/claro.png';
import lumina from '../../Assets/Restaurants/Lumina.png';
import tigerLily from '../../Assets/Restaurants/tiger-lily.png';
import onza from '../../Assets/Restaurants/onza.png';
import kitchenMarket from '../../Assets/Restaurants/kitchenMarket.png';
import mashya from '../../Assets/Restaurants/mashya.png';
import seeMore from '../../Assets/General/>>.svg';
import { CardType } from '../Shared/RestaurantCard';

import padKiMao from '../../Assets/Dishes/PadKiMao.png';
import garbanzoFrito from '../../Assets/Dishes/GarbanzoFrito.png';
import smokedPizza from '../../Assets/Dishes/SmokedPizza.png';
import spicy from '../../Assets/Dishes/logos/spicy.svg'
import veg from '../../Assets/Dishes/logos/vegetarian.svg'
import vegan from '../../Assets/Dishes/logos/vegan.svg'

import yossiShitrit from '../../Assets/Chefs/YossiShitrit.png'
import verticalLogo from '../../Assets/General/epicureLogoVertical.svg'
import appStore from '../../Assets/General/appStore.svg'
import googlePlay from '../../Assets/General/googlePlay.svg'
import Footer from '../Shared/Footer';


const Homepage: React.FC = () => {
  const chefDesc = "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.";

  const chefs: Chef[] = [
    { name: "Ran Shmueli", description: chefDesc, restaurants: [] },
    { name: "Meir Adoni", description: chefDesc, restaurants: [] },
    { name: "Yanir Green", description: chefDesc, restaurants: [] },
    { name: "Yossi Shitrit", description: chefDesc, restaurants: [] },
  ];
  
  const yossiRestaurants: Restaurant[] = [
    { name: "Onza", photoSrc: onza, chef: chefs[3], rating: 0 },
    { name: "Kitchen Market", photoSrc: kitchenMarket, chef: chefs[3], rating: 0 },
    { name: "Mashya", photoSrc: mashya, chef: chefs[3], rating: 0 },
  ];

  const restaurants: Restaurant[] = [
    { name: "Claro", photoSrc: claro, chef: chefs[0], rating: 4 },
    { name: "Lumina", photoSrc: lumina, chef: chefs[1], rating: 3 },
    { name: "Tiger Lily", photoSrc: tigerLily, chef: chefs[2], rating: 4 },
  ];

  const dishes: Dish[] = [
    {name: "Pad Ki Mao", photoSrc: padKiMao, ingredients: ['Shrimps', 'Glass Noodles', 'Kemiri Nuts', 'Shallots', 
      'Lemon Grass', 'Magic Chili Brown Coconut'], price: -1, features: [features.spicy]},
    {name: "Garbanzo Frito", photoSrc: garbanzoFrito, ingredients: ['Polenta fingers', 'veal cheek', 'magic chili cured lemon cream', 'yellow laksa'], price: 98, features: []},
    {name: "Smoked Pizza", photoSrc: smokedPizza, ingredients: ['Basil dough', 'cashew "butter"', 'demi-glace', 'bison & radish'], price: -1, features: [features.vegan]},
  ];

  const aboutUsText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum."
  const aboutUsText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros."

  return (
    <div className='homepage-wrapper'>

      <Header></Header>
      <Hero></Hero>

      <div className='cards-main-title'>{"popular restaurants in epicure:".toLocaleUpperCase()}</div>
      <div className='restaurant-cards'>
        {restaurants.map((item, index) => {
          return <RestaurantCard
            restaurant={item}
            cardType={CardType.full}
            key={index}
            />
        })}
      </div>
      <button type="button" className='all-restaurants-btn'>
        All restaurants
        <img src={seeMore}/>
      </button>

      <div className='cards-main-title'>{"signature dish of:".toLocaleUpperCase()}</div>
      <div className='dish-cards'>
        {dishes.map((item, index) => {
          return <DishCard
            dish = {dishes[index]}
            dishId = {index}
            key={item.name}
            />
        })}
      </div>

      <div className='icons-meaning'>
        <p>{'the meaning of our icons:'.toLocaleUpperCase()}</p>
        <div className='icons-dict'>
          <div>
            <img className='spicy-icon' src={spicy} />
            <p className='spicy-icon-text'>Spicy</p>
          </div>
          <div>
            <img className='veg-icon' src={veg} />
            <p className='veg-icon-text'>Vegetarian</p>
          </div>
          <div>
            <img className='vegan-icon' src={vegan} />
            <p className='vegan-icon-text'>Vegan</p>
          </div>
        </div>
      </div>

      <p>{'chef of the week:'.toLocaleUpperCase()}</p>
      <div className='weekly-chef'>
        <img src={yossiShitrit}/>
        <p className='weekly-chef-desc'>{chefs[3].description}</p>
      </div>  
      <div className='weekly-chef-restaurants'>
        <p className='weekly-chef-dishes-title'>{chefs[3].name.split(" ")[0]}'s Restaurants:</p>
        <div className='weekly-chef-dish-cards'>
          {yossiRestaurants.map((item, index) => {
            return <RestaurantCard
              restaurant={item}
              cardType={CardType.small}
              key={index}
              />
          })}
        </div>
      </div>
      
      <div className='about-us'>
          <p>{'about us'.toLocaleUpperCase()}</p>
          <div className='about-us-text'>
            <div>
                <p>{aboutUsText1}</p>
                <p>{aboutUsText2}</p>
            </div>
            <img className='about-us-logo' src={verticalLogo} />
          </div>
          <div className='about-us-buttons'>
            <button type="button"><img src={appStore}/></button>
            <button type="button"><img src={googlePlay}/></button>
          </div>
      </div>

      <Footer />
      
    </div>
  );
};

export default Homepage;