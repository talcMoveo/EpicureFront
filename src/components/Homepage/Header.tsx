import React from 'react';
import './Header.css';

import logo from '../../Assets/logo.svg';
import search from '../../Assets/Header/searchLogo.svg';
import profile from '../../Assets/Header/profileLogo.svg';
import cart from '../../Assets/Header/cartLogo.svg';

const Header: React.FC = () => {
  //

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
        {/* add search bar (input element) */}
        <img src={search} className='header-action-logo' />
        <img src={profile} className='header-action-logo' />
        <img src={cart} className='header-action-logo' />
      </div>
    </div>
  );
};

export default Header;