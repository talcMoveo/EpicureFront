/* eslint-disable */
import React from 'react';
import styles from '../../styles/Homepage/IconsDict.module.scss';

import spicy from '../../assets/Dishes/logos/spicy.svg';
import veg from '../../assets/Dishes/logos/vegetarian.svg';
import vegan from '../../assets/Dishes/logos/vegan.svg';

const IconsDict: React.FC = () => {

    return (
        <div className={styles[`icons-meaning`]}>
            <p className={`${styles['icons-meaning-txt']} ${styles['title']}`}>{'the meaning of our icons:'.toLocaleUpperCase()}</p>
            <div className={styles['icons-dict']}>
                <div>
                    <img className={`${styles['spicy-icon']} ${styles['icons-meaning-img']}`} src={spicy} />
                    <p className={`${styles['spicy-icon-text']} ${styles['icons-meaning-txt']}`}>Spicy</p>
                </div>
                <div>
                    <img className={`${styles['veg-icon']} ${styles['icons-meaning-img']}`} src={veg} />
                    <p className={`${styles['veg-icon-text']} ${styles['icons-meaning-txt']}`}>Vegetarian</p>
                </div>
                <div>
                    <img className={`${styles['vegan-icon']} ${styles['icons-meaning-img']}`} src={vegan} />
                    <p className={`${styles['vegan-icon-text']} ${styles['icons-meaning-txt']}`}>Vegan</p>
                </div>
            </div>
        </div>
    );
};

export default IconsDict;
