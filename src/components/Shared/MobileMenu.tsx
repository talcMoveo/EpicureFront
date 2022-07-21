/* eslint-disable */
import React from 'react';
import './MobileMenu.scss';

import mobileMenuDivider from '../../assets/Mobile/mobile-menu-divider.svg'
import exit from '../../assets/General/x.svg';

const MobileMenu: React.FC<any> = (props: any) => {
  return (
    <div className='mobile-menu'>
        <nav className='mobile-navbar'>
          <img src={exit} className='mobile-navbar-exit' onClick={props.handleExit}/>
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
