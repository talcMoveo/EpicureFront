import React from 'react';
import './ShoppingCart.css';

import cartLogo from '../../Assets/Header/cartLogo.svg';
import Dish from '../../models/dish';

const ShoppingCart: React.FC = (props) => {

    const cart: Dish[] = [];

    return (
        <div className='shopping-cart'>
            {
                (cart.length == 0) && 
                <div className='shopping-cart-empty'>
                    <img src={cartLogo} />
                    <p>{'your bag is empty'.toLocaleUpperCase()}</p>
                </div>
            }
            <button type="button">{'order history'.toLocaleUpperCase()}</button>
        </div>
    );
};

export default ShoppingCart;