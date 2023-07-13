import React from 'react';
import './display.css';

const display = props =>{ 
    return(
    <div className='display'>{props.value}</div>
    ) 
}

export default display;