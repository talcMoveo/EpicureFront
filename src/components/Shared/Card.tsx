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
        cardWrapperClass = 'card-wrapper dish dish-' + props.itemId;
    }
    
    const isDish = (item: Dish | Restaurant): item is Dish => 'features' in item;
    const currentItem = props.item;

    const getFeatures = () => {
        const featureLogos: any[] = [];
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
            if (featureLogos.length == 0) {
                featureLogos.push(currentItem.price);
            }
        }
        return featureLogos;
    };

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
                        if (typeof feat === "number") {
                            return (<div className='feature-price' key={index}>
                                <img src={priceLine} />
                                <img className='shekel-logo' src={shekelLogo} />
                                <span className='feature-span'>{feat}</span>
                                <img src={priceLine} />
                            </div>);
                        } else {
                            return <img className='feature-img' src={feat} key={index} />;
                        }
                    })}
                </div>
            }
            {
                (props.cardType === 'restaurant-big') &&
                !isDish(currentItem) &&
                <div>
                    <div className='restaurant-chef-name'>{currentItem.chef}</div>
                    <div className='restaurant-rating-img'>
                        {[...Array(currentItem.rating)].map((i, index) => {
                            return <img className='rating-img' src={fullStar} alt="logo" key={index} />;
                        })}
                        {[...Array(5 - currentItem.rating)].map((i, index) => {
                            return <img className='rating-img' src={emptyStar} alt="logo" key={index} />;
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;
