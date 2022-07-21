/* eslint-disable */
import React from 'react';
import './CardsSection.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';

import Restaurant from '../../models/restaurant';
import Slider from 'react-slick';

import seeMore from '../../assets/General/>>.svg';

const CardsSectionRes: React.FC<{popularRestaurants: Restaurant[]}> = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.12,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
            }
        ]
    };
    
    return (
        <div className='cards-section-wrapper'>
            <div className='cards-main-title'>
                {'popular restaurants in epicure:'.toLocaleUpperCase()}
            </div>
            <Slider {...settings} className='restaurant-cards'>
                {props.popularRestaurants.map((item: Restaurant, index: number) => {
                    return <Card cardType={CardType.restaurantBig} item={item} key={index} />;
                })}
            </Slider>
            <div>
                <button type='button' className='all-restaurants-btn'>
                    All restaurants
                    <img src={seeMore} className='all-restaurants-btn-img' />
                </button>
            </div>
        </div>
    );
};

export default CardsSectionRes;
