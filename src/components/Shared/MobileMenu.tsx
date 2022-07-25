/* eslint-disable */
import React from 'react';
import styles from './MobileMenu.module.scss';

import mobileMenuDivider from '../../assets/Mobile/mobile-menu-divider.svg'
import exit from '../../assets/General/x.svg';

const MobileMenu: React.FC<any> = (props: any) => {
  return (
    <div className={styles['mobile-menu']}>
        <nav className={styles['mobile-navbar']}>
          <img src={exit} className={styles['mobile-navbar-exit']} onClick={props.handleExit}/>
            <a className={styles['navbar-link']}>Restaurants</a>
            <a className={styles['navbar-link']}>Chefs</a>
            <img className={styles['navbar-divider']} src={mobileMenuDivider}/>
            <a className={`${styles['navbar-link']} ${styles['footer-addition']}`}>Contact Us</a>
            <a className={`${styles['navbar-link']} ${styles['footer-addition']}`}>Terms of Use</a>
            <a className={`${styles['navbar-link']} ${styles['footer-addition']}`}>Privacy Policy</a>
        </nav>
    </div>
  );
};

export default MobileMenu;
