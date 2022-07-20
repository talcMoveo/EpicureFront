/* eslint-disable */
import React, { Component } from 'react';
import './HomepageSection.scss';

const HomepageSection = (props: {section: string, children: any}) => {
    return (
        <div className={'Homepage-section ' + props.section + '-section'}>
        {props.children}
        </div>
    );
};

export default HomepageSection;
