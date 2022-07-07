import React from 'react';
import './CardsSection.scss';

import seeMore from '../../assets/General/>>.svg';
import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';


// import { CardType } from '../Shared/RestaurantCard';
// import DishCard from '../Shared/DishCard';
// import RestaurantCard from '../Shared/RestaurantCard';



const CardsSection: React.FC<any> = (props) => {
    return (
        <div>
            <div className='cards-main-title'>{"popular restaurants in epicure:".toLocaleUpperCase()}</div>
            <div className='restaurant-cards'>
            {props.popularRestaurants.map((item:any, index:number) => {
                return <Card cardType={CardType.restaurantBig} item={item} key={index}/>
            })}
            </div>
            <button type="button" className='all-restaurants-btn'>
            All restaurants
            <img src={seeMore} className='all-restaurants-btn-img'/>
            </button>
    
            <div className='cards-main-title'>{"signature dish of:".toLocaleUpperCase()}</div>
            <div className='dish-cards'>
            {props.signatureDishes.map((item:any, index:number) => {
                return <Card cardType={CardType.dish} item={props.signatureDishes[index]} itemId={index} key={index}/>
            })}
            </div>
        </div>
    );
  };
  
  export default CardsSection;