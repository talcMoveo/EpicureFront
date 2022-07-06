import React from 'react';
import './Cards.css';

import Dish from '../../models/dish';
import priceLine from '../../Assets/Dishes/logos/dishPriceLine.svg'
import shekelLogo from '../../Assets/Dishes/logos/shekelLogo.svg'
import spicy from '../../Assets/Dishes/logos/spicy.svg'
import veg from '../../Assets/Dishes/logos/vegetarian.svg'
import vegan from '../../Assets/Dishes/logos/vegan.svg'

const DishCard: React.FC<{dish: Dish, dishId: number}> = (props) => {

  const getFeatures = () => {
    let featureLogos: any[] = [];
    props.dish.features.forEach(feat => {
      if (feat === 'spicy') {
        featureLogos.push(spicy);
      } else if (feat === 'vegan') {
        featureLogos.push(vegan);
      } else {
        featureLogos.push(veg);
      }
    });
    if (featureLogos.length == 0) {
      featureLogos.push(props.dish.price);
    }
    return featureLogos;
  }

  return (
    <div className={'dish-' + props.dishId}>
      <div className='card-wrapper'>
        <img src={props.dish.photoSrc} alt="logo" />
        <div className='card-name'>{props.dish.name}</div>
        <div className='dish-ingredients'>
          {props.dish.ingredients.map((ingredient, index) => {
            if (index == props.dish.ingredients.length - 1) {
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
            <img className='shekel-logo' src={shekelLogo} /> <span>{feat}</span>
            <img src={priceLine} />
          </div>)
        } else {
          return <img className='feature-svg' src={feat} key={index}/>
        }
      })}
    </div>
  );
};

export default DishCard;

/**   
 * name: string;
    photoSrc: string;
    ingredients: string[];
    price: number;
    features: features[];
 * 
 */