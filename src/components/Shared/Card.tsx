import React from 'react';
import './Card.scss';

import emptyStar from '../../assets/Restaurants/StarEmpty.svg';
import fullStar from '../../assets/Restaurants/StarFull.svg';

import priceLine from '../../assets/Dishes/logos/dishPriceLine.svg'
import shekelLogo from '../../assets/Dishes/logos/shekelLogo.svg'
import spicy from '../../assets/Dishes/logos/spicy.svg'
import veg from '../../assets/Dishes/logos/vegetarian.svg'
import vegan from '../../assets/Dishes/logos/vegan.svg'

export enum CardType {
    restaurantBig = 'restaurant-big',
    restaurantSmall = 'restaurant-small',
    dish = 'dish'
}

const Card: React.FC<{cardType: CardType, item: any, itemId?: number}> = (props) => {
    
    let cardWrapperClass = 'card-wrapper restaurant-big'
    if (props.cardType === 'restaurant-small') {
        cardWrapperClass = 'card-wrapper restaurant-small'
    } else if (props.cardType === 'dish') {
        cardWrapperClass = 'card-wrapper dish dish-' + props.itemId;
    }

    const getFeatures = () => {
        let featureLogos: any[] = [];
        props.item.features.forEach((feat: string) => {
            if (feat === 'spicy') {
            featureLogos.push(spicy);
            } else if (feat === 'vegan') {
            featureLogos.push(vegan);
            } else {
            featureLogos.push(veg);
            }
        });
        if (featureLogos.length == 0) {
            featureLogos.push(props.item.price);
        }
        return featureLogos;
    }

    return(
        <div className={cardWrapperClass}>
            <img className='card-img' src={require("../../" + props.item.photoSrc)} alt={props.item.name} /> 
            <div className='card-title'>{props.item.name}</div>
            {
                (props.cardType === 'restaurant-big') && 
                <div>
                    <div className='restaurant-chef-name'>{props.item.chef}</div>
                    <div className='restaurant-rating-img'>
                        {[...Array(props.item.rating)].map((i, index) => {
                        return <img className='rating-img' src={fullStar} alt="logo" key={index}/>
                        })}
                        {[...Array(5 - props.item.rating)].map((i, index) => {
                        return <img className='rating-img' src={emptyStar} alt="logo" key={index}/>
                        })}
                    </div>
                </div>
            }
            {
                (props.cardType === 'dish') && 
                <div className='dish-card-continue'>
                    <div>
                        <div className='dish-ingredients'>
                            {props.item.ingredients.map((ingredient:string, index:number) => {
                                if (index == props.item.ingredients.length - 1) {
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
                            </div>)
                        } else {
                            return <img className='feature-img' src={feat} key={index}/>
                        }
                    })}
                </div>
            }
        </div>
    );
}
export default Card;