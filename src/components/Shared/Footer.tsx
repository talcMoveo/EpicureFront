import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  
  return (
    <div className='footer-wrapper'>
      <button type="button">Contact Us</button>
      <button type="button">Terms of Use</button>
      <button type="button">Privacy Policy</button>
    </div>
  );
};

export default Footer;