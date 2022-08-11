/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/Hero.module.scss";

import search from "../../assets/Header/searchLogo.svg";
import erase from "../../assets/General/x.svg";
import axios from "axios";
import HeroSearch from "./HeroSearch";

const Hero: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [allData, setAllData] = useState("");
  const [ops, setOps] = useState<string[]>([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/search");
      setAllData(res.data);

      const allOptions = [
        ...res.data["chefResults"],
        ...res.data["dishResults"],
        ...res.data["restaurantResults"],
      ];

      const options: string[] = await allOptions.map((item: any) => {
        return item.name;
      });
      setOps(options);
    };

    getRes().catch(console.error);
  }, []);
  console.log("all options after: ", ops);

  const handleChange = (event: any) => {
    const inputVal = event.target.value;
    if (inputVal.length === 0) {
      eraseClickHandler();
      return;
    }
    closeAllOptions();
    setEnteredInput(event.target.value);
    console.log(event.target.value);
    let divElement = document.createElement("div");
    divElement.setAttribute("className", "autocomplete-items");
    divElement.setAttribute("id", "autocomplete-items");
    divElement.setAttribute(
      "style",
      `
        position: static;
      `
    );
    let autocompleteContainer = document.getElementById("option-items-wrapper");
    autocompleteContainer?.appendChild(divElement);

    ops.forEach((item: string, index: number) => {
      if (item.toLowerCase().includes(inputVal.toLowerCase())) {
        const optionItem = document.createElement("div");
        optionItem.innerHTML =
          "<strong>" + ops[index].substring(0, inputVal.length) + "</strong>";
        optionItem.innerHTML += ops[index].substring(inputVal.length);
        optionItem.innerHTML +=
          "<input type='hidden' value='" + ops[index] + "'>";

        optionItem.addEventListener("click", function (e) {
          setEnteredInput(this.getElementsByTagName("input")[0].value);
          closeAllOptions();
        });
        divElement.appendChild(optionItem);
      }
    });
  };

  const eraseClickHandler = () => {
    setEnteredInput("");
    closeAllOptions();
  };

  const closeAllOptions = () => {
    const element = document.getElementById("autocomplete-items");
    console.log(element);
    element?.remove();
  };

  return (
    <div className={styles["hero-wrapper"]}>
      <div className={styles["hero-inside-wrapper"]} id="hero-inside-wrapper">
        <span className={styles["hero-text"]}>
          Epicure works with the top chef restaurants in Tel Aviv
        </span>
        <div className={styles["hero-input-div"]}>
          <img className={styles["search-img"]} src={search} />
          <span
            className={styles["hero-autocomplete"]}
            id="autocomplete-container"
          >
            <input
              className={styles["hero-input"]}
              type="text"
              placeholder="Search for restaurant cuisine, chef"
              onChange={(event) => handleChange(event)}
              value={enteredInput}
            />
          </span>
          {enteredInput.trim().length !== 0 && (
            <img
              className={styles["erase-img"]}
              src={erase}
              onClick={eraseClickHandler}
            />
          )}
        </div>
        <div
          className={styles["option-items-wrapper"]}
          id="option-items-wrapper"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
