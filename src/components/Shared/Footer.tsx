import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  
  return (
    <div className='footer-wrapper'>
      <button className='footer-btn' type="button">Contact Us</button>
      <button className='footer-btn' type="button">Terms of Use</button>
      <button className='footer-btn' type="button">Privacy Policy</button>
    </div>
  );
};

export default Footer;