import React from 'react';
import './Cards.css';

import Restaurant from '../../models/restaurant';
import emptyStar from '../../Assets/Restaurants/StarEmpty.svg';
import fullStar from '../../Assets/Restaurants/StarFull.svg';


const RestaurantCard: React.FC<Restaurant> = (props) => {
  return (
    <div className='card-wrapper'>
      <img src={props.photoSrc} alt="logo" />
      <div className='card-name'>{props.name}</div>
      <div className='restaurant-chef'>{props.chef.name}</div>
      <div className='restaurant-rating-img'>
        {[...Array(props.rating)].map((i) => {
          return <img src={fullStar} alt="logo" />
        })}
        {[...Array(5 - props.rating)].map((i) => {
          return <img src={emptyStar} alt="logo" />
        })}
      </div>
    </div>
  );
};

export default RestaurantCard;