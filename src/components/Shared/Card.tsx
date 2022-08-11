/* eslint-disable */
import React, { useState } from 'react';
import styles from '../../styles/Shared/Card.module.scss';

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

const imagesRes: any = {
    Lumina: "https://i.ibb.co/0Yq0xvQ/Lumina.png",
    Claro: "https://i.ibb.co/vsFg88S/claro.png",
    'Kitchen Market': "https://i.ibb.co/xhmZvwJ/kitchen-Market.png",
    Mashya: "https://i.ibb.co/5jQjNmQ/mashya.png",
    Onza: "https://i.ibb.co/8cdVLWq/onza.png",
    'Tiger Lily': "https://i.ibb.co/Wyp6sbV/tiger-lily.png"
}

const imagesDishes: any = {
    'Smoked Pizza': "https://i.ibb.co/0YS9wnK/Smoked-Pizza.png",
    'Pad Ki Mao': "https://i.ibb.co/0KZb96R/PadKiMao.png",
    'Garbanzo Frito': "https://i.ibb.co/SQsZ8np/Garbanzo-Frito.png"
}

const Card: React.FC<{ cardType: CardType, item: Restaurant | Dish, itemId?: number }> = (props) => {
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

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles[props.cardType]}>
                { !isDish(currentItem) && <div className={styles['card-img']} style={{ backgroundImage: `url(${imagesRes[currentItem.name]})` }} /> }
                { isDish(currentItem) && <div className={styles['card-img']} style={{ backgroundImage: `url(${imagesDishes[currentItem.name]})` }} /> }
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
                                (window.innerWidth > 960) && currentItem.rating &&
                                <div className={styles['restaurant-rating']}>
                                    { [...Array(currentItem.rating)].map((i, index) => {
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
