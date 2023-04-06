import React, { useState } from 'react';
import './style.css';

const ColorSlider=({baseColor,colorName, onValueChange,value})=>{

    return(
        <div class="sliders">
            <label for={baseColor}>{colorName}</label>
            <input onChange={(event) => { onValueChange(event.target.value) }}
                type="range"
                className={`slider slider--${baseColor}`}
                min="0"
                max="255"
                value={value}
            />
        </div> 
 )   
}

export default ColorSlider;