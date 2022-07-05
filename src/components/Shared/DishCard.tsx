import React from 'react';
import './Cards.css';

import Dish from '../../models/dish';
import priceLine from '../../Assets/Dishes/logos/dishPriceLine.svg'
import spicy from '../../Assets/Dishes/logos/spicy.svg'
import veg from '../../Assets/Dishes/logos/vegetarian.svg'
import vegan from '../../Assets/Dishes/logos/vegan.svg'

const DishCard: React.FC<{dish: Dish, dishId: number}> = (props) => {

  const getFeatures = () => {
    let featureLogos: string[] = [];
    console.log('props: ', props.dish.features);
    props.dish.features.forEach(feat => {
      console.log('feat: ', feat);
      if (feat === 'spicy') {
        featureLogos.push(spicy);
      } else if (feat === 'vegan') {
        featureLogos.push(vegan);
      } else {
        featureLogos.push(veg);
      }
    });
    console.log('featureLogos:', featureLogos);
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
      {getFeatures().map(feat => {
        return <img className='feature-svg' src={feat} />
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