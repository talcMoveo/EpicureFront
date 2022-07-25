/* eslint-disable */
import React from 'react';
import styles from './ChefOfTheWeek.module.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';
import Restaurant from '../../models/restaurant';
import Slider from 'react-slick';

interface props {
    chefOfTheWeekData: {
        name: string,
        photoSrc: string,
        description: string
    },
    chefOfTheWeekRestaurants: Restaurant[]
}

const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        }
        }
    ]
};

const ChefOfTheWeek: React.FC<props> = (props) => {
    const chefPhotoSrc = require('../../' + props.chefOfTheWeekData.photoSrc);
    const chefDesc = props.chefOfTheWeekData.description;
    const chefName = props.chefOfTheWeekData.name;
    const chefRestaurants = props.chefOfTheWeekRestaurants;

    return (
        <div className={styles['weekly-chef-wrapper']}>
            <p className={styles['weekly-chef-title']}>{'chef of the week:'.toLocaleUpperCase()}</p>
            <div className={styles['weekly-chef']}>
                <img className={styles['weekly-chef-img']} src={chefPhotoSrc} />
                <p className={styles['weekly-chef-desc']}>{chefDesc}</p>
            </div>
            <div className={styles['weekly-chef-restaurants']}>
                <p className={styles['weekly-chef-dishes-title']}>{chefName.split(' ')[0]}'s Restaurants:</p>
                <Slider {...settings} className={styles['weekly-chef-dish-cards']}>
                    {chefRestaurants.map((item: Restaurant, index: number) => {
                        return <Card cardType={CardType.restaurantSmall} item={item} key={index} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default ChefOfTheWeek;
