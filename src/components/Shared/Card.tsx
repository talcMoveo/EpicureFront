/* eslint-disable */
import React from 'react';
import './Card.scss';

import emptyStar from '../../assets/Restaurants/StarEmpty.svg';
import fullStar from '../../assets/Restaurants/StarFull.svg';

import priceLine from '../../assets/Dishes/logos/dishPriceLine.svg';
import shekelLogo from '../../assets/Dishes/logos/shekelLogo.svg';
import spicy from '../../assets/Dishes/logos/spicy.svg';
import veg from '../../assets/Dishes/logos/vegetarian.svg';
import vegan from '../../assets/Dishes/logos/vegan.svg';

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
    let cardWrapperClass = 'card-wrapper restaurant-big';
    if (props.cardType === 'restaurant-small') {
        cardWrapperClass = 'card-wrapper restaurant-small';
    } else if (props.cardType === 'dish') {
        cardWrapperClass = 'card-wrapper dish';
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

    const dishProps = () => {
        if (window.innerWidth <= 960) {
            return (<div className='dish-price'>
                        <img className='shekel-logo' src={shekelLogo} />
                        <span className='feature-span'>{isDish(currentItem) && currentItem.price}</span>
                    </div>);
        } else if ((featureLogos.length == 0) && (window.innerWidth > 960)) {
            return (<div className='dish-price'>
                        <img src={priceLine} />
                        <img className='shekel-logo' src={shekelLogo} />
                        <span className='feature-span'>{isDish(currentItem) && currentItem.price}</span>
                        <img src={priceLine} />
                    </div>);
        };
    }

    return (
        <div className={cardWrapperClass}>
            <img className='card-img' src={require('../../' + currentItem.photoSrc)} alt={currentItem.name} />
            <div className='card-title'>{currentItem.name}</div>
            {
                isDish(currentItem) &&
                <div className='dish-card-continue'>
                    <div>
                        <div className='dish-ingredients'>
                            {currentItem.ingredients.map((ingredient: string, index: number) => {
                                if (index == currentItem.ingredients.length - 1) {
                                    return ingredient;
                                }
                                return (ingredient + ", ");
                            })}
                        </div>
                    </div>
                    {getFeatures().map((feat, index) => {
                        return <img className='feature-img' src={feat} key={index} />;
                    })}
                    { dishProps() }
                </div>
            }
            {
                (props.cardType === 'restaurant-big') &&
                !isDish(currentItem) &&
                <div>
                    <div className='restaurant-chef-name'>{currentItem.chef}</div>
                    {
                        (window.innerWidth > 960) &&
                        <div className='restaurant-rating-img'>
                            {[...Array(currentItem.rating)].map((i, index) => {
                                return <img className='rating-img' src={fullStar} alt="logo" key={index} />;
                            })}
                            {[...Array(5 - currentItem.rating)].map((i, index) => {
                                return <img className='rating-img' src={emptyStar} alt="logo" key={index} />;
                            })}
                        </div>
                    }
                    
                </div>
            }
        </div>
    );
};

export default Card;
