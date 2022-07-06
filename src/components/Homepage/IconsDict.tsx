import React from 'react';
import './IconsDict.scss';

import spicy from '../../assets/Dishes/logos/spicy.svg'
import veg from '../../assets/Dishes/logos/vegetarian.svg'
import vegan from '../../assets/Dishes/logos/vegan.svg'

const IconsDict: React.FC = () => {
    return (
        <div className='icons-meaning'>
            <p>{'the meaning of our icons:'.toLocaleUpperCase()}</p>
            <div className='icons-dict'>
                <div>
                    <img className='spicy-icon' src={spicy} />
                    <p className='spicy-icon-text'>Spicy</p>
                </div>
                <div>
                    <img className='veg-icon' src={veg} />
                    <p className='veg-icon-text'>Vegetarian</p>
                </div>
                <div>
                    <img className='vegan-icon' src={vegan} />
                    <p className='vegan-icon-text'>Vegan</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default IconsDict;