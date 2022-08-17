/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Shared/Card.module.scss";

import priceLine from "../../assets/Dishes/logos/dishPriceLine.svg";
import shekelLogo from "../../assets/Dishes/logos/shekelLogo.svg";
import spicy from "../../assets/Dishes/logos/spicy.svg";
import veg from "../../assets/Dishes/logos/vegetarian.svg";
import vegan from "../../assets/Dishes/logos/vegan.svg";

import emptyStar from "../../assets/Restaurants/StarEmpty.svg";
import fullStar from "../../assets/Restaurants/StarFull.svg";

export enum CardType {
  restaurantBig = "restaurant-big",
  restaurantSmall = "restaurant-small",
  dish = "dish",
}

enum features {
  spicy = "spicy",
  vegetarian = "veg",
  vegan = "vegan",
}

const Card: React.FC<{
  cardType: CardType;
  item: any;
  itemId?: number;
}> = (props) => {
  const currentItem = props.item;
  let featureLogos: string[] = [];

  const getFeatures = () => {
    if (props.cardType === 'dish') {
      currentItem.features?.forEach((feat: string) => {
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
      return (
        <div className={styles["dish-price"]}>
          <img className={styles["shekel-logo"]} src={shekelLogo} />
          <span className={styles["feature-span"]}>
            {props.cardType === 'dish' && currentItem.price}
          </span>
        </div>
      );
    } else if (featureLogos.length == 0 && window.innerWidth > 960) {
      return (
        <div className={styles["dish-price"]}>
          <img src={priceLine} />
          <img className={styles["shekel-logo"]} src={shekelLogo} />
          <span className={styles["feature-span"]}>
            {props.cardType === 'dish' && currentItem.price}
          </span>
          <img src={priceLine} />
        </div>
      );
    }
  };

  const dishIngredients = () => {
    let ingredientsStr = "";
    if (props.cardType === 'dish') {
      const ingredients = currentItem.ingredients;
      ingredients.map((ingredient: string, index: number) => {
        if (index == ingredients.length - 1) {
          ingredientsStr += ingredient;
        } else {
          ingredientsStr += ingredient + ", ";
        }
      });
    }
    return ingredientsStr;
  };

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles[props.cardType]}>
        <div
          className={styles["card-img"]}
          style={{ backgroundImage: `url(${props.item.img})` }}
        />
        <div className={styles["card-content"]}>
          <div className={styles["card-title"]}>{currentItem.name}</div>
          {props.cardType === "dish" && (
            <div className={styles["dish-cont"]}>
              <div className={styles["dish-ingredients"]}>
                {dishIngredients()}
              </div>
              <div className={styles["dish-features"]}>
                {getFeatures().map((feat, index) => {
                  return (
                    <img
                      className={styles["dish-feature-img"]}
                      src={feat}
                      key={index}
                    />
                  );
                })}
              </div>
              {dishPrice()}
            </div>
          )}
          {props.cardType === "restaurant-big" && (
            <div className={styles["res-big-cont"]}>
              <div className={styles["restaurant-chef-name"]}>
                {currentItem.chef}
              </div>
              {window.innerWidth > 960 && currentItem.rating && (
                <div className={styles["restaurant-rating"]}>
                  {[...Array(currentItem.rating)].map((i, index) => {
                    return (
                      <img
                        className={styles["rating-img"]}
                        src={fullStar}
                        alt="logo"
                        key={index}
                      />
                    );
                  })}
                  {[...Array(5 - currentItem.rating)].map((i, index) => {
                    return (
                      <img
                        className={styles["rating-img"]}
                        src={emptyStar}
                        alt="logo"
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
