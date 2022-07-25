/* eslint-disable */
import React from 'react';
import styles from './AboutUs.module.scss';

import verticalLogo from '../../assets/General/epicureLogoVertical.svg';
import appStore from '../../assets/General/appStore.svg';
import googlePlay from '../../assets/General/googlePlay.svg';

const AboutUs: React.FC<{ aboutUsText: string[] }> = (props) => {
  return (
    <div className={styles['about-us']}>
      <img className={styles['about-us-logo']} src={verticalLogo} />
      <div className={styles['about-us-info']}>
        <div className={styles['about-us-text-wrapper']}>
          <p>{'about us'.toLocaleUpperCase()}</p>
          {
            props.aboutUsText.map((txt: string, index: number) => {
              return <p className={styles['about-us-text']} key={index}>{txt}</p>;
            })
          }
        </div>
        <div className={styles['about-us-buttons-wrapper']}>
          <button type="button" className={`${styles['about-us-button']} ${styles['app-btn']}`}>
            <img src={appStore} className={styles['about-us-img']} />
          </button>
          <button type="button" className={`${styles['about-us-button']} ${styles['google-btn']}`}>
            <img src={googlePlay} className={styles['about-us-img']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
