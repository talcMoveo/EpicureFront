/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/CardsSection.module.scss";
import "../../scssModules/_slick.scss";

import Card from "../Shared/Card";
import { CardType } from "../Shared/Card";

import Restaurant from "../../models/restaurant";
import Slider from "react-slick";

import seeMore from "../../assets/General/>>.svg";
import axios from "axios";

const settings = {
  swipeToSlide: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 756,
      settings: {
        slidesToShow: 1.12,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
  ],
};

const CardsSectionRes: React.FC = () => {
  const [popularRestaurants, setPopularRestaurants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/v1/restaurants/popular"
      );
      await setPopularRestaurants(res.data);
    };

    getData().catch(console.error);
  }, []);

  return popularRestaurants.length == 0 ? null : (
    <div className={styles["cards-section-wrapper"]}>
      <div className={styles["cards-main-title"]}>
        {"popular restaurants in epicure:".toLocaleUpperCase()}
      </div>
      <Slider {...settings} className={styles["restaurant-cards"]}>
        {popularRestaurants.map((item: Restaurant, index: number) => {
          return (
            <Card cardType={CardType.restaurantBig} item={item} key={index} />
          );
        })}
      </Slider>
      <div>
        <button type="button" className={styles["all-restaurants-btn"]}>
          All restaurants
          <img src={seeMore} className={styles["all-restaurants-btn-img"]} />
        </button>
      </div>
    </div>
  );
};

export default CardsSectionRes;
