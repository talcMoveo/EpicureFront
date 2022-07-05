import React from 'react';
import './Homepage.css';

import Header from './Header';
import Hero from './Hero';
import RestaurantCard from '../Shared/RestaurantCard';
import Chef from '../../models/chef';
import Restaurant from '../../models/restaurant';
import Dish from '../../models/dish';
import { features } from '../../models/featuresEnum';

import claro from '../../Assets/Restaurants/claro.png';
import lumina from '../../Assets/Restaurants/Lumina.png';
import tigerLily from '../../Assets/Restaurants/tiger-lily.png';
import seeMore from '../../Assets/>>.svg';
import padKiMao from '../../Assets/Dishes/PadKiMao.png';
import garbanzoFrito from '../../Assets/Dishes/GarbanzoFrito.png';
import smokedPizza from '../../Assets/Dishes/SmokedPizza.png';
import DishCard from '../Shared/DishCard';


const Homepage: React.FC = () => {
  const name = 'tal';
  const rating = 5;

  const chefs: Chef[] = [
    { name: "Ran Shmueli" },
    { name: "Meir Adoni" },
    { name: "Yanir Green" },
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

  return (
    <div className='homepage-wrapper'>

      <Header></Header>
      <Hero></Hero>

      <div className='pre-cards-text'>{"popular restaurants in epicure:".toLocaleUpperCase()}</div>
      <div className='cards'>
        {restaurants.map((item, index) => {
          return <RestaurantCard
            name={item.name}
            chef={item.chef}
            rating={item.rating}
            photoSrc={item.photoSrc}
            key={index}
            />
        })}
      </div>
      <a className='all-restaurants-text'>
        All restaurants
        <img src={seeMore}/>
      </a>

      <div className='pre-cards-text'>{"signature dish of:".toLocaleUpperCase()}</div>
      <div className='dish-cards'>
        {dishes.map((item, index) => {
          return <DishCard
            dish = {dishes[index]}
            dishId = {index}
            // name={item.name}
            // photoSrc={item.photoSrc}
            // ingredients={item.ingredients}
            // price={item.price}
            // features={item.features}
            key={item.name}
            />
        })}
      </div>
    </div>
  );
};

export default Homepage;

/*
{todosCtx.items.map((item) => (
  <TodoItem
    key={item.id}
    text={item.text}
    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
  />
))}
*/