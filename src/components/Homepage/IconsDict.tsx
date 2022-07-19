/* eslint-disable */
import React, { useEffect } from 'react';
import './IconsDict.scss';

import spicy from '../../assets/Dishes/logos/spicy.svg';
import veg from '../../assets/Dishes/logos/vegetarian.svg';
import vegan from '../../assets/Dishes/logos/vegan.svg';

const IconsDict: React.FC = () => {

    return (
        <div className='cards-animation icons-meaning'>
            <p className='icons-meaning-txt'>{'the meaning of our icons:'.toLocaleUpperCase()}</p>
            <div className='icons-dict'>
                <div>
                    <img className='spicy-icon icons-meaning-img' src={spicy} />
                    <p className='spicy-icon-text icons-meaning-txt'>Spicy</p>
                </div>
                <div>
                    <img className='veg-icon icons-meaning-img' src={veg} />
                    <p className='veg-icon-text icons-meaning-txt'>Vegetarian</p>
                </div>
                <div>
                    <img className='vegan-icon icons-meaning-img' src={vegan} />
                    <p className='vegan-icon-text icons-meaning-txt'>Vegan</p>
                </div>
            </div>
        </div>
    );
};

export default IconsDict;
