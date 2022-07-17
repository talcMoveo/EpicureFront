import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className='footer-wrapper'>
      <a className='footer-link'>Contact Us</a>
      <a className='footer-link'>Terms of Use</a>
      <a className='footer-link'>Privacy Policy</a>
    </div>
  );
};

export default Footer;
