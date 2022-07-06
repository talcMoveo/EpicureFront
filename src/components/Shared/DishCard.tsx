import React from 'react';
import './Cards.scss';

import Dish from '../../models/dish';
import priceLine from '../../assets/Dishes/logos/dishPriceLine.svg'
import shekelLogo from '../../assets/Dishes/logos/shekelLogo.svg'
import spicy from '../../assets/Dishes/logos/spicy.svg'
import veg from '../../assets/Dishes/logos/vegetarian.svg'
import vegan from '../../assets/Dishes/logos/vegan.svg'

import padKiMao from '../../assets/Dishes/PadKiMao.png'

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
        <img src={require("../../" + props.dish.photoSrc)} alt="logo" />
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
          return <img className='feature-img' src={feat} key={index}/>
        }
      })}
    </div>
  );
};

export default DishCard;