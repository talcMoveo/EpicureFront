/* eslint-disable */
import React from 'react';
import styles from '../../styles/Homepage/CardsSection.module.scss';
import '../../scssModules/_slick.scss';

import Card from '../Shared/Card';
import { CardType } from '../Shared/Card';

import Dish from '../../models/dish';
import Slider from 'react-slick';

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

const CardsSectionDishes: React.FC<{signatureDishes: Dish[]}> = (props) => {
    
    return (
        <div className={styles['cards-section-wrapper']}>
            <div className={styles['cards-main-title']}>{'signature dish of:'.toLocaleUpperCase()}</div>
            <Slider {...settings} className={styles['dish-cards']}>
                {props.signatureDishes.map((item: Dish, index: number) => {
                    return <Card cardType={CardType.dish} item={item} itemId={index} key={index} />;
                })}
            </Slider>
        </div>
    );
};

export default CardsSectionDishes;
