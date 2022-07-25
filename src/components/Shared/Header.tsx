/* eslint-disable */

import React, { useState } from 'react';
import styles from './Header.module.scss';
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

  const handleExitSearch = () => {
    setShowSearch(prev => !prev);
  }

  const handleExitNavbar = () => {
    setShowMobileMenu(prev => !prev);
  }

  return (
    <div className={styles['header-overall-wrapper']}>
      <div className={styles['header-wrapper']}>
        <div className={styles['header-links-mobile']}>
          <button className={styles['header-btn']}
            onClick={() => {setShowMobileMenu(prev => !prev);}}
          >
            <img
              className={styles['header-btn-img']}
              src={showMobileMenu ? mobileMenuExit : mobileMenu}
            />
          </button>
        </div>

        <img className={styles['header-logo-mobile']} src={logoCircle} />
        <div className={styles['header-links-desktop']}>
          <img className={styles['header-logo']} src={logo} alt="logo" />
          <nav className={styles['header-navbar']}>
            <a className={styles['navbar-link']}>Restaurants</a>
            <a className={styles['navbar-link']}>Chefs</a>
          </nav>
        </div>
        
        
        <div className={styles['header-actions']}>
          <div className={styles['header-search']}
            style={{ border: showSearch && (window.innerWidth > 960) ? "0.5px solid black" : "none" }}
            >
            { (window.innerWidth > 960) && 
              <input className={styles['search-input']}
              placeholder='Search for restaurant cuisine, chef'
              disabled={!showSearch}
              style={{display: showSearch ? "": "none"}}
              />
            }
            <img src={search} 
              className={styles['search-img']}
              onClick={() => {setShowSearch(prev => !prev);}}
              />
          </div>
          <button className={`${styles['header-btn']} ${styles['profile-btn']}`} type="button" >
            <img src={profile} /></button>
          <button
            className={`${styles['header-btn']} ${styles['cart-btn']}`}
            type="button"
            onClick={() => {setShowCart(prev => !prev);}}
            >
            <img src={cart} /></button>
        </div>
      </div>
      {
        <CSSTransition
          in={showMobileMenu}
          timeout={400}
          classNames='header-animation'
          unmountOnExit
        >
          <MobileMenu handleExit={handleExitNavbar}/>
        </CSSTransition>
      }
      {
          (window.innerWidth <= 960) && 
          <CSSTransition
              in={showSearch}
              timeout={400}
              classNames='header-animation'
              unmountOnExit
            >
              <MobileSearch handleExit={handleExitSearch}  />
            </CSSTransition>
      }
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
