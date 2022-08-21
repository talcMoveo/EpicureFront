/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/Hero.module.scss";

import search from "../../assets/Header/searchLogo.svg";
import erase from "../../assets/General/x.svg";
import axios from "axios";

const Hero: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [ops, setOps] = useState<string[]>([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/search");
      const allOptions = []
        .concat(res.data.chefs)
        .concat(res.data.dishes)
        .concat(res.data.restaurants);
      const options: string[] = await allOptions.map((item: any) => {
        return item.name;
      });
      setOps(options);
    };

    getRes().catch(console.error);
  }, []);

  const handleChange = (event: any) => {
    const inputVal = event.target.value;
    if (inputVal.length === 0) {
      eraseClickHandler();
      return;
    }
    closeAllOptions();
    setEnteredInput(event.target.value);
    let divElement = document.createElement("div");
    divElement.setAttribute("className", "autocomplete-items");
    divElement.setAttribute("id", "autocomplete-items");
    divElement.setAttribute("style", "position: absolute; display: none;");
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
    element?.remove();
  };

  return (
    <div className={styles["hero-wrapper"]}>
      <div className={styles["hero-inside-wrapper"]} id="hero-inside-wrapper">
        <span className={styles["hero-text"]}>
          Epicure works with the top chef restaurants in Tel Aviv
        </span>
        {/* <Autocomplete
          disablePortal
          id="hero-autocomplete"
          options={ops}
          sx={{ width: "98%", margin: "0 10px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{ style: { fontSize: 12 } }}
              label="Search for restaurant cuisine, chef"
            />
          )}
        /> */}
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
