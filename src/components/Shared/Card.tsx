/* eslint-disable */
import React, { useState } from 'react';
import styles from './Card.module.scss';

import priceLine from '../../assets/Dishes/logos/dishPriceLine.svg';
import shekelLogo from '../../assets/Dishes/logos/shekelLogo.svg';
import spicy from '../../assets/Dishes/logos/spicy.svg';
import veg from '../../assets/Dishes/logos/vegetarian.svg';
import vegan from '../../assets/Dishes/logos/vegan.svg';

import emptyStar from '../../assets/Restaurants/StarEmpty.svg';
import fullStar from '../../assets/Restaurants/StarFull.svg';

import Restaurant from '../../models/restaurant';
import Dish from '../../models/dish';

export enum CardType {
    restaurantBig = 'restaurant-big',
    restaurantSmall = 'restaurant-small',
    dish = 'dish'
}

enum features {
    spicy = 'spicy',
    vegetarian = 'veg',
    vegan = 'vegan'
}

const Card: React.FC<{ cardType: CardType, item: Restaurant | Dish, itemId?: number }> = (props) => {
    let cardClass: string;
    if (props.cardType === 'restaurant-big') {
        cardClass = 'restaurant-big';
    } else if (props.cardType === 'restaurant-small') {
        cardClass = 'restaurant-small';
    } else if (props.cardType === 'dish') {
        cardClass = 'dish';
    } else {
        throw Error("Card type was not well defined - should be [restaurant-big / restaurant-small / dish]");
    }
    
    const isDish = (item: Dish | Restaurant): item is Dish => 'features' in item;
    const currentItem = props.item;
    let featureLogos: string[] = [];
    
    const getFeatures = () => {
        if (isDish(currentItem)) {
            currentItem.features.forEach((feat: string) => {
                if (feat === features.spicy) {
                    featureLogos.push(spicy);
                } else if (feat === features.vegan) {
                    featureLogos.push(vegan);
                } else {
                    featureLogos.push(veg);
                }
            });
        }
        return featureLogos;
    };

    const dishPrice = () => {
        if (window.innerWidth <= 960) {
            return (<div className={styles['dish-price']}>
                        <img className={styles['shekel-logo']} src={shekelLogo} />
                        <span className={styles['feature-span']}>{isDish(currentItem) && currentItem.price}</span>
                    </div>);
        } else if ((featureLogos.length == 0) && (window.innerWidth > 960)) {
            return (<div className={styles['dish-price']}>
                        <img src={priceLine} />
                        <img className={styles['shekel-logo']} src={shekelLogo} />
                        <span className={styles['feature-span']}>{isDish(currentItem) && currentItem.price}</span>
                        <img src={priceLine} />
                    </div>);
        };
    }

    const dishIngredients = () => {
        let ingredientsStr = '';
        if (isDish(currentItem)) {
            const ingredients = currentItem.ingredients;
            ingredients.map((ingredient: string, index: number) => {
                if (index == ingredients.length - 1) {
                    ingredientsStr += ingredient;
                } else {
                    ingredientsStr += ingredient + ", ";
                }
            })
        }
        return ingredientsStr;
    }

    const backgroundImg = require('../../' + currentItem.photoSrc);

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles[cardClass]}>
                <div className={styles['card-img']} style={{ backgroundImage: `url(${backgroundImg})` }} />
                <div className={styles['card-content']}>
                    <div className={styles['card-title']}>{currentItem.name}</div>
                    {
                        isDish(currentItem) &&
                        <div className={styles['dish-cont']}>
                            <div className={styles['dish-ingredients']}>
                                { dishIngredients() }
                            </div>
                            <div className={styles['dish-features']}>
                                {getFeatures().map((feat, index) => {
                                    return <img className={styles['dish-feature-img']} src={feat} key={index} />;
                                })}
                            </div>
                            { dishPrice() }
                        </div>
                    }
                    {
                        (props.cardType === 'restaurant-big') &&
                        !isDish(currentItem) &&
                        <div className={styles['res-big-cont']}>
                            <div className={styles['restaurant-chef-name']}>{currentItem.chef}</div>
                            {
                                (window.innerWidth > 960) &&
                                <div className={styles['restaurant-rating']}>
                                    {[...Array(currentItem.rating)].map((i, index) => {
                                        return <img className={styles['rating-img']} src={fullStar} alt="logo" key={index} />;
                                    })}
                                    {[...Array(5 - currentItem.rating)].map((i, index) => {
                                        return <img className={styles['rating-img']} src={emptyStar} alt="logo" key={index} />;
                                    })}
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
