/* eslint-disable */
import React from 'react';
import styles from './MobileSearch.module.scss';

import searchLogo from '../../assets/Header/searchLogo.svg';
import exit from '../../assets/General/x.svg';

const MobileSearch: React.FC<any> = (props: any) => {

  return (
    <div className={styles['mobile-search']}>
      <div className={styles['mobile-search-header']}>
        <img
          src={exit} className={styles['mobile-search-exit']}
          onClick={props.handleExit}
        />
        <div className={styles['mobile-search-title']}>
          Search
        </div>
      </div>
      <div className={styles['mobile-search-content']}>
        <div className={styles['mobile-search-input-wrapper']}>
          <img className={styles['mobile-header-search-img']} src={searchLogo}/>
          <input
            className={styles['mobile-header-input']}
            placeholder='Search for restaurant cuisine, chef'
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
