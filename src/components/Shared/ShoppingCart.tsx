/* eslint-disable */
import React from 'react';
import styles from './ShoppingCart.module.scss';

import cartLogo from '../../assets/Header/cartLogo.svg';
import Dish from '../../models/dish';

const ShoppingCart: React.FC = (props) => {
    const cart: Dish[] = [];

    return (
        <div className={styles['shopping-cart']}>
            {
                (cart.length == 0) &&
                <div className={styles['shopping-cart-empty']}>
                    <img className={styles['shopping-cart-empty-img']} src={cartLogo} />
                    <p className={styles['shopping-cart-empty-txt']}>{'your bag is empty'.toLocaleUpperCase()}</p>
                </div>
            }
            { (window.innerWidth > 960) && <button className={styles['order-history-btn']} type="button">{'order history'.toLocaleUpperCase()}</button>}
        </div>
    );
};

export default ShoppingCart;
