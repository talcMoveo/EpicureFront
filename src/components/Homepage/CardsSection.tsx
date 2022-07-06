import React from 'react';
import './CardsSection.scss';

import RestaurantCard from '../Shared/RestaurantCard';
import DishCard from '../Shared/DishCard';
import { CardType } from '../Shared/RestaurantCard';
import seeMore from '../../assets/General/>>.svg';



const CardsSection: React.FC<any> = (props) => {
    return (
        <div>
            <div className='cards-main-title'>{"popular restaurants in epicure:".toLocaleUpperCase()}</div>
            <div className='restaurant-cards'>
            {props.popularRestaurants.map((item:any, index:number) => {
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
            {props.signatureDishes.map((item:any, index:number) => {
                return <DishCard
                dish = {props.signatureDishes[index]}
                dishId = {index}
                key={item.name}
                />
            })}
            </div>
        </div>
    );
  };
  
  export default CardsSection;