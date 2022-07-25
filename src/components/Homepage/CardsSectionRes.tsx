/* eslint-disable */
import React from 'react';
import styles from './CardsSection.module.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';

import Restaurant from '../../models/restaurant';
import Slider from 'react-slick';

import seeMore from '../../assets/General/>>.svg';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
        breakpoint: 756,
        settings: {
            slidesToShow: 1.12,
            slidesToScroll: 1,
            infinite: true,
            arrows: false
        }
        }
    ]
};

const CardsSectionRes: React.FC<{popularRestaurants: Restaurant[]}> = (props) => {
    
    return (
        <div className={styles['cards-section-wrapper']}>
            <div className={styles['cards-main-title']}>
                {'popular restaurants in epicure:'.toLocaleUpperCase()}
            </div>
            <Slider {...settings} className={styles['restaurant-cards']}>
                {props.popularRestaurants.map((item: Restaurant, index: number) => {
                    return <Card cardType={CardType.restaurantBig} item={item} key={index} />;
                })}
            </Slider>
            <div>
                <button type='button' className={styles['all-restaurants-btn']}>
                    All restaurants
                    <img src={seeMore} className={styles['all-restaurants-btn-img']} />
                </button>
            </div>
        </div>
    );
};

export default CardsSectionRes;
