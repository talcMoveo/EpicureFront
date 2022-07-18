/* eslint-disable */

import React, { useState } from 'react';
import './Header.scss';

import logo from '../../assets/General/logo.svg';
import search from '../../assets/Header/searchLogo.svg';
import profile from '../../assets/Header/profileLogo.svg';
import cart from '../../assets/Header/cartLogo.svg';
import ShoppingCart from '../Shared/ShoppingCart';

import mobileMenu from '../../assets/Mobile/mobile-menu.svg'
import mobileMenuExit from '../../assets/General/x.svg'
import logoCircle from '../../assets/Mobile/logo-circle.svg'
import MobileMenu from './MobileMenu';
import MobileSearch from './MobileSearch';

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='header-wrapper'>
      <div className='header-links-mobile'>
        <button className='header-btn' onClick={() => {setShowMobileMenu(!showMobileMenu);}}>
          <img className='header-btn-img' src={showMobileMenu ? mobileMenuExit : mobileMenu} />
        </button>
        {
          (showMobileMenu) &&
          <MobileMenu />
        }
      </div>
      <img className='header-logo-mobile' src={logoCircle} />
      <div className='header-links-desktop'>
        <img className='header-logo' src={logo} alt="logo" />
        <nav id='navbar'>
          <a className='navbar-link'>Restaurants</a>
          <a className='navbar-link'>Chefs</a>
        </nav>
      </div>
      <div className='header-actions'>
        <button className='header-btn search-btn' type="button" onClick={() => {setShowSearch(!showSearch);}}>
          <img src={search} /></button>
        <button className='header-btn profile-btn' type="button" >
          <img src={profile} /></button>
        <button className='header-btn cart-btn' type="button" onClick={() => {setShowCart(!showCart);}}>
          <img src={cart} /></button>
      </div>
      {
        (showSearch) && (window.innerWidth > 960) && <input className='header-input' placeholder='Search for restaurant cuisine, chef' />
      }
      {
        (showSearch) && (window.innerWidth <= 960) && <MobileSearch />
      }
      {(showCart) && <ShoppingCart />}
    </div>
  );
};

export default Header;
