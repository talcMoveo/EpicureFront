import React from 'react';
import './AboutUs.scss';

import verticalLogo from '../../assets/General/epicureLogoVertical.svg';
import appStore from '../../assets/General/appStore.svg';
import googlePlay from '../../assets/General/googlePlay.svg';

const AboutUs: React.FC<{ aboutUsText: string[] }> = (props) => {
  return (
    <div className='about-us'>
      <img className='about-us-logo' src={verticalLogo} />
      <div className='about-us-info'>
        <div className='about-us-text-wrapper'>
          <p>{'about us'.toLocaleUpperCase()}</p>
          {
            props.aboutUsText.map((txt: string, index: number) => {
              return <p className='about-us-text' key={index}>{txt}</p>;
            })
          }
        </div>
        <div className='about-us-buttons-wrapper'>
          <button type="button" className='about-us-button app-btn'>
            <img src={appStore} className='about-us-img' />
          </button>
          <button type="button" className='about-us-button google-btn'>
            <img src={googlePlay} className='about-us-img' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
