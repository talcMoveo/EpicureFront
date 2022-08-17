/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/ChefOfTheWeek.module.scss";

import Card from "../Shared/Card";
import { CardType } from "../Shared/Card";
import Restaurant from "../../models/restaurant";
import Slider from "react-slick";
import axios from "axios";

interface props {
  chefOfTheWeekData: {
    name: string;
    img: string;
    description: string;
  };
  chefOfTheWeekRestaurants: Restaurant[];
}

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 3,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const imagesChefs: any = {
  "Yossi Shitrit": "https://i.ibb.co/Ytv0Q83/yossi-shitrit.png",
};

const ChefOfTheWeek: React.FC<props> = (props) => {
  const [weeklyChefData, setWeeklyChefData] = useState<any>();
  const [weeklyChefRestaurants, setWeeklyChefRestaurants] = useState<any>();

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/v1/weeklyChef/res"
      );
      await setWeeklyChefRestaurants(
        res.data[0].chefRestaurants
      );
      setWeeklyChefData(res.data[0].chef[0]);
    };

    getRes().catch(console.error);
  }, []);

  return !weeklyChefData ? null : (
    <div className={styles["weekly-chef-wrapper"]}>
      <p className={styles["weekly-chef-title"]}>
        {"chef of the week:".toLocaleUpperCase()}
      </p>
      <div className={styles["weekly-chef"]}>
        <div
          className={styles["weekly-chef-img"]}
          style={{
            backgroundImage: `url(${imagesChefs[weeklyChefData.name]})`,
          }}
        >
          <span className={styles["weekly-chef-img-name"]}>
            {weeklyChefData.name}
          </span>
        </div>
        <p className={styles["weekly-chef-desc"]}>
          {weeklyChefData.description}
        </p>
      </div>
      <div className={styles["weekly-chef-restaurants"]}>
        <p className={styles["weekly-chef-dishes-title"]}>
          {weeklyChefData.name.split(" ")[0]}'s Restaurants:
        </p>
        <Slider {...settings} className={styles["weekly-chef-dish-cards"]}>
          {weeklyChefRestaurants.map((item: Restaurant, index: number) => {
            return (
              <Card
                cardType={CardType.restaurantSmall}
                item={item}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
