import React from 'react';
import './CardsSection.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';

import Restaurant from '../../models/restaurant';
import Dish from '../../models/dish';

import seeMore from '../../assets/General/>>.svg';

const CardsSection: React.FC<{popularRestaurants: Restaurant[], signatureDishes: Dish[]}> = (props) => {
    return (
        <div>
            <div className='cards-main-title'>{'popular restaurants in epicure:'.toLocaleUpperCase()}</div>
            <div className='restaurant-cards'>
                {props.popularRestaurants.map((item: Restaurant, index: number) => {
                    return <Card cardType={CardType.restaurantBig} item={item} key={index} />;
                })}
            </div>
            <button type='button' className='all-restaurants-btn'>
                All restaurants
                <img src={seeMore} className='all-restaurants-btn-img' />
            </button>

            <div className='cards-main-title'>{'signature dish of:'.toLocaleUpperCase()}</div>
            <div className='dish-cards'>
                {props.signatureDishes.map((item: Dish, index: number) => {
                    return <Card cardType={CardType.dish} item={item} itemId={index} key={index} />;
                })}
            </div>
        </div>
    );
};

export default CardsSection;
