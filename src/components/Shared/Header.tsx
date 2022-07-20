/* eslint-disable */

import React, { useState } from 'react';
import './Header.scss';
import { CSSTransition } from 'react-transition-group';

import ShoppingCart from '../Shared/ShoppingCart';
import logo from '../../assets/General/logo.svg';
import search from '../../assets/Header/searchLogo.svg';
import profile from '../../assets/Header/profileLogo.svg';
import cart from '../../assets/Header/cartLogo.svg';

import MobileMenu from './MobileMenu';
import MobileSearch from './MobileSearch';
import mobileMenu from '../../assets/Mobile/mobile-menu.svg';
import mobileMenuExit from '../../assets/General/x.svg';
import logoCircle from '../../assets/Mobile/logo-circle.svg';

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchDisabled, setSearchDisabled] = useState(true);

  const handleExit = () => {
    setShowSearch(!showSearch);
  }

  return (
    <div className='header-wrapper'>
      <div className='header-links-mobile'>
        <button className='header-btn' onClick={() => {setShowMobileMenu(!showMobileMenu);}}>
          <img className='header-btn-img' src={showMobileMenu ? mobileMenuExit : mobileMenu} />
        </button>
        { (showMobileMenu) && <MobileMenu /> }
      </div>

      <img className='header-logo-mobile' src={logoCircle} />
      <div className='header-links-desktop'>
        <img className='header-logo' src={logo} alt="logo" />
        <nav className='header-navbar'>
          <a className='navbar-link'>Restaurants</a>
          <a className='navbar-link'>Chefs</a>
        </nav>
      </div>
      
      {
          (window.innerWidth <= 960) && 
          <CSSTransition
              in={showSearch}
              timeout={400}
              classNames='header-animation'
              unmountOnExit
            >
              <MobileSearch handleExit={handleExit}  />
            </CSSTransition>
      }
      
      <div className='header-actions'>
        <div className='header-search' style={{border: showSearch && (window.innerWidth > 960) ? "0.5px solid black" : "none"}}>
          { (window.innerWidth > 960) && 
            <input className='search-input' placeholder='Search for restaurant cuisine, chef' disabled={!showSearch}
              style={{display: showSearch ? "": "none"}}
            />
          }
          <img src={search}  className='search-img' onClick={() => {setShowSearch(!showSearch);}}/>
        </div>
        <button className='header-btn profile-btn' type="button" >
          <img src={profile} /></button>
        <button className='header-btn cart-btn' type="button" onClick={() => {setShowCart(!showCart);}}>
          <img src={cart} /></button>
      </div>
      {
        <CSSTransition
          in={showCart}
          timeout={400}
          classNames='header-animation'
          unmountOnExit
        >
          <ShoppingCart />
        </CSSTransition>
      }
    </div>
  );
};

export default Header;
