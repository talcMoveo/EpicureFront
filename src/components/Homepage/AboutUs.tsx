import React from 'react';
import './AboutUs.scss';

import verticalLogo from '../../assets/General/epicureLogoVertical.svg';
import appStore from '../../assets/General/appStore.svg';
import googlePlay from '../../assets/General/googlePlay.svg';

const AboutUs: React.FC<{ aboutUsText: string[] }> = (props) => {
  return (
    <div className='about-us'>
      <p>{'about us'.toLocaleUpperCase()}</p>
      <div className='about-us-text-wrapper'>
        <div>
          {
            props.aboutUsText.map((txt: string, index: number) => {
              return <p className='about-us-text' key={index}>{txt}</p>;
            })
          }
        </div>
        <img className='about-us-logo' src={verticalLogo} />
      </div>
      <div className='about-us-buttons-wrapper'>
        <button type="button" className='about-us-buttons'>
          <img src={appStore} className='about-us-img' />
        </button>
        <button type="button" className='about-us-buttons'>
          <img src={googlePlay} className='about-us-img' />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
