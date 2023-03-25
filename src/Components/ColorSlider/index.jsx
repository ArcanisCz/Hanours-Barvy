import React, { useState } from 'react';
import './style.css';

const ColorSlider=({baseColor,colorName, onValueChange})=>{
const  value=null


let id=""

    if (baseColor==="red"){
        id ="redSlider"
    } else if (baseColor==="green"){
        id ="greenSlider"
    } else {
        id = "blueSlider" }

    return(
    <div class="sliders">
        <label for={baseColor}>{colorName}</label>
        <input  onChange={() => {onValueChange(value);}}
          type="range"
          className={`slider slider--${baseColor}`}
          id={id}
          min="0"
          max="255"
          value={value}
          
        />
    </div>
    
 )   
}

export default ColorSlider;