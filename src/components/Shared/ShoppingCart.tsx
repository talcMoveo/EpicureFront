/* eslint-disable */
import React from 'react';
import './ShoppingCart.scss';

import cartLogo from '../../assets/Header/cartLogo.svg';
import Dish from '../../models/dish';

const ShoppingCart: React.FC = (props) => {
    const cart: Dish[] = [];

    return (
        <div className='shopping-cart'>
            {
                (cart.length == 0) &&
                <div className='shopping-cart-empty'>
                    <img className='shopping-cart-empty-img' src={cartLogo} />
                    <p className='shopping-cart-empty-txt'>{'your bag is empty'.toLocaleUpperCase()}</p>
                </div>
            }
            { (window.innerWidth > 960) && <button className='order-history-btn' type="button">{'order history'.toLocaleUpperCase()}</button>}
        </div>
    );
};

export default ShoppingCart;
