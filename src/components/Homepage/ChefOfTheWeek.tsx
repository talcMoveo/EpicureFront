import React from 'react';
import './ChefOfTheWeek.scss';

import RestaurantCard from '../Shared/RestaurantCard';
import { CardType } from '../Shared/RestaurantCard';

const ChefOfTheWeek: React.FC<any> = (props) => {
    console.log('chef', props);
    const chefPhotoSrc = require('../../' + props.chefOfTheWeekData.photoSrc);
    const chefDesc = props.chefOfTheWeekData.description;
    const chefName = props.chefOfTheWeekData.name;
    const chefRestaurants = props.chefOfTheWeekRestaurants;

    return (
        <div>
            <p>{'chef of the week:'.toLocaleUpperCase()}</p>
            <div className='weekly-chef'>
                <img src={chefPhotoSrc}/>
                <p className='weekly-chef-desc'>{chefDesc}</p>
            </div>  
            <div className='weekly-chef-restaurants'>
                <p className='weekly-chef-dishes-title'>{chefName.split(" ")[0]}'s Restaurants:</p>
                <div className='weekly-chef-dish-cards'>
                {chefRestaurants.map((item:any, index:number) => {
                    return <RestaurantCard
                    restaurant={item}
                    cardType={CardType.small}
                    key={index}
                    />
                })}
                </div>
            </div>
        </div>
    );
  };
  
  export default ChefOfTheWeek;