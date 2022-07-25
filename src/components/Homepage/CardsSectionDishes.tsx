/* eslint-disable */
import React from 'react';
import './CardsSection.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';

import Dish from '../../models/dish';
import Slider from 'react-slick';

const CardsSectionDishes: React.FC<{signatureDishes: Dish[]}> = (props) => {
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
            breakpoint: 765,
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
            <div className='cards-main-title'>{'signature dish of:'.toLocaleUpperCase()}</div>
            <Slider {...settings} className='dish-cards'>
                {props.signatureDishes.map((item: Dish, index: number) => {
                    return <Card cardType={CardType.dish} item={item} itemId={index} key={index} />;
                })}
            </Slider>
        </div>
    );
};

export default CardsSectionDishes;
