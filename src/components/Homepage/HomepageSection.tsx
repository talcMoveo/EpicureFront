/* eslint-disable */
import React from 'react';
import styles from './HomepageSection.module.scss';

const HomepageSection = (props: {section: string, children: any}) => {
    return (
        <div className={'Homepage-section ' + styles[`${props.section}-section`]}>
        {props.children}
        </div>
    );
};

export default HomepageSection;
