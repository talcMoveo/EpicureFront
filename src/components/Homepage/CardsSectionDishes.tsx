/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/CardsSection.module.scss";
import "../../scssModules/_slick.scss";

import Card from "../Shared/Card";
import { CardType } from "../Shared/Card";

import Dish from "../../models/dish";
import Slider from "react-slick";
import axios from "axios";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1.12,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

const CardsSectionDishes: React.FC = () => {
  const [signatureDishes, setSignatureDishes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/restaurants/signatures");
      const tempData = res.data.map((item: any) => {
        return item.dish[0];
      })
      setSignatureDishes(tempData);
    };

    getData().catch(console.error);
  }, []);

  return !signatureDishes ? null : (
    <div className={styles["cards-section-wrapper"]}>
      <div className={styles["cards-main-title"]}>
        {"signature dish of:".toLocaleUpperCase()}
      </div>
      <Slider {...settings} className={styles["dish-cards"]}>
        {signatureDishes.map((item: Dish, index: number) => {
          return (
            <Card
              cardType={CardType.dish}
              item={item}
              itemId={index}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CardsSectionDishes;
