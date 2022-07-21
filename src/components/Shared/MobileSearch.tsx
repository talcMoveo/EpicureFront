/* eslint-disable */
import React from 'react';
import './MobileSearch.scss';

import searchLogo from '../../assets/Header/searchLogo.svg';
import exit from '../../assets/General/x.svg';

const MobileSearch: React.FC<any> = (props: any) => {

  return (
    <div className='mobile-search'>
      <div className='mobile-search-header'>
        <img src={exit} className='mobile-search-exit' onClick={props.handleExitSearch}/>
        <div className='mobile-search-title'>
          Search
        </div>
      </div>
      <div className='mobile-search-content'>
        <div className='mobile-search-input-wrapper'>
          <img className='mobile-header-search-img' src={searchLogo}/>
          <input className='mobile-header-input' placeholder='Search for restaurant cuisine, chef' />
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
