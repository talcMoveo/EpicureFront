/* eslint-disable */
import React from 'react';
import './ChefOfTheWeek.scss';

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

const ChefOfTheWeek: React.FC<props> = (props) => {
    const chefPhotoSrc = require('../../' + props.chefOfTheWeekData.photoSrc);
    const chefDesc = props.chefOfTheWeekData.description;
    const chefName = props.chefOfTheWeekData.name;
    const chefRestaurants = props.chefOfTheWeekRestaurants;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
            }
        ]
    };

    return (
        <div>
            <p className='weekly-chef-title'>{'chef of the week:'.toLocaleUpperCase()}</p>
            <div className='weekly-chef'>
                <img className='weekly-chef-img' src={chefPhotoSrc} />
                <p className='weekly-chef-desc'>{chefDesc}</p>
            </div>
            <div className='weekly-chef-restaurants'>
                <p className='weekly-chef-dishes-title'>{chefName.split(' ')[0]}'s Restaurants:</p>
                <Slider {...settings} className='weekly-chef-dish-cards'>
                    {chefRestaurants.map((item: Restaurant, index: number) => {
                        return <Card cardType={CardType.restaurantSmall} item={item} key={index} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default ChefOfTheWeek;
