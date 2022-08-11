/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Homepage/Hero.module.scss";

import search from "../../assets/Header/searchLogo.svg";
import erase from "../../assets/General/x.svg";
import Select from "react-select";
import axios from "axios";

const searchStyles = {
    option: (provided:any, state:any) => ({
        ...provided,
        borderBottom: '1px solid #DEDEDE',
        fontWeight: state.isSelected ? "bold" : "normal",
        padding: 20,
        fontSize: '15px',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: '98%',
    }),
    container: (provided:any, state:any) => ({
        ...provided,
        margin: 'auto',
        // border: '0.5px solid black',
        borderRadius: '4px',
        padding: '0 10px',
    }),
    menu: () => ({
    }),
    singleValue: (provided:any, state:any) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return {
            ...provided,
            opacity,
            transition,
            fontSize: '15px',
            display: 'flex',
            flexDirection: 'column',
        };
    }
  }

const HeroSearch: React.FC = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [allData, setAllData] = useState("");
  const [ops, setOps] = useState([]);
  let options: any = [];

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/search");
      setAllData(res.data);

      const allOptions = [
        ...res.data["chefResults"],
        ...res.data["dishResults"],
        ...res.data["restaurantResults"],
      ];

      options = await allOptions.map((item: any) => {
        return { value: item.name, label: item.name };
      });
      setOps(options);

    //   console.log("all options after: ", options);
    };

    getRes().catch(console.error);
  }, []);

  const handleChange = (event: any) => {
    setEnteredInput(event.target.value);
  };

  const eraseClickHandler = () => {
    setEnteredInput("");
  };

//   console.log("all options after: ", options);

  return (
    <div>
      {
        (ops.length > 0) &&
        <div className="select-wrapper">
            <Select options={ops} styles={searchStyles}/>
        </div>
      }
    </div>
  );
};

export default HeroSearch;
