import React from 'react';
import './AboutUs.scss';

import verticalLogo from '../../assets/General/epicureLogoVertical.svg'
import appStore from '../../assets/General/appStore.svg'
import googlePlay from '../../assets/General/googlePlay.svg'

const AboutUs: React.FC<any> = (props) => {
    return (
        <div className='about-us'>
          <p>{'about us'.toLocaleUpperCase()}</p>
          <div className='about-us-text'>
            <div>
                <p>{props.aboutUsText[0]}</p>
                <p>{props.aboutUsText[1]}</p>
            </div>
            <img className='about-us-logo' src={verticalLogo} />
          </div>
          <div className='about-us-buttons'>
            <button type="button"><img src={appStore}/></button>
            <button type="button"><img src={googlePlay}/></button>
          </div>
      </div>
    );
  };
  
  export default AboutUs;