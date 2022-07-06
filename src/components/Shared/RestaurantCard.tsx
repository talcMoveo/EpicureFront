import React from 'react';
import './Cards.scss';

import Restaurant from '../../models/restaurant';
import emptyStar from '../../Assets/Restaurants/StarEmpty.svg';
import fullStar from '../../Assets/Restaurants/StarFull.svg';

export enum CardType {
  full= 'full',
  small= 'small'
}


const RestaurantCard: React.FC<{restaurant: Restaurant, cardType: CardType}> = (props) => {

  let cardWrapperClass = 'card-wrapper'
  let cardNameClass = 'card-name';
  if (props.cardType === 'small') {
    cardWrapperClass = 'card-wrapper-small'
    cardNameClass = 'card-name-small';
  }

  return (
    <div className={cardWrapperClass}>
      <img src={props.restaurant.photoSrc} alt={props.restaurant.name} />
      <div className={cardNameClass}>{props.restaurant.name}</div>
      {
        (props.cardType === 'full') && 
        <div>
          <div className='restaurant-chef-name'>{props.restaurant.chef.name}</div>
          <div className='restaurant-rating-img'>
            {[...Array(props.restaurant.rating)].map((i, index) => {
              return <img src={fullStar} alt="logo" key={index}/>
            })}
            {[...Array(5 - props.restaurant.rating)].map((i, index) => {
              return <img src={emptyStar} alt="logo" key={index}/>
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default RestaurantCard;