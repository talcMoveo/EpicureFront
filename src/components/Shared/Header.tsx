import React, { useState } from 'react';
import './Header.css';

import logo from '../../Assets/General/logo.svg';
import search from '../../Assets/Header/searchLogo.svg';
import profile from '../../Assets/Header/profileLogo.svg';
import cart from '../../Assets/Header/cartLogo.svg';
import ShoppingCart from '../Shared/ShoppingCart';

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className='header-wrapper'>
      <div className='header-pages-links'>
        <img src={logo} className='header-logo' alt="logo" />
        <nav className='header-nav'>
          <a className='header-nav-item'>Restaurants</a>
          <a className='header-nav-item'>Chefs</a>
        </nav>
      </div>
      <div className='header-actions'>
        {(showSearch) && <input placeholder='Search for restaurant cuisine, chef' />}
        <button className='search-btn' type="button"  onClick={() => {setShowSearch(!showSearch)}}><img src={search} /></button>
        <button className='profile-btn' type="button" ><img src={profile} /></button>
        <button className='cart-btn' type="button"  onClick={() => {setShowCart(!showCart)}}><img src={cart} /></button>
        {(showCart) && <ShoppingCart />}
      </div>
    </div>
  );
};

export default Header;