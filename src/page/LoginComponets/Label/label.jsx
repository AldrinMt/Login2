import React from 'react';
import './label.css'
const Label = ({text}) => {

    return(
        <div className = 'container'>
            <label>{text}</label>
        </div>
    )
};

export default Label;