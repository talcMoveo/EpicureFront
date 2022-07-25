import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <a className={styles['footer-link']}>Contact Us</a>
      <a className={styles['footer-link']}>Terms of Use</a>
      <a className={styles['footer-link']}>Privacy Policy</a>
    </div>
  );
};

export default Footer;
