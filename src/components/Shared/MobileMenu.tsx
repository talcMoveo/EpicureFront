import React from 'react';
import './MobileMenu.scss';

import mobileMenuDivider from '../../assets/Mobile/mobile-menu-divider.svg'

const MobileMenu: React.FC = () => {
  return (
    <div className='mobile-menu'>
        <nav className='navbar'>
            <a className='navbar-link'>Restaurants</a>
            <a className='navbar-link'>Chefs</a>
            <img className='navbar-divider' src={mobileMenuDivider}/>
            <a className='navbar-link footer-addition'>Contact Us</a>
            <a className='navbar-link footer-addition'>Terms of Use</a>
            <a className='navbar-link footer-addition'>Privacy Policy</a>
        </nav>
    </div>
  );
};

export default MobileMenu;
