import React from 'react';
import './MobileSearch.scss';

import searchLogo from '../../assets/Header/searchLogo.svg';

const MobileSearch: React.FC = () => {

  return (
    <div className='mobile-search'>
        <input className='mobile-header-input' placeholder='Search for restaurant cuisine, chef' />
        <img className='mobile-header-search-img' src={searchLogo}/>
    </div>
  );
};

export default MobileSearch;
