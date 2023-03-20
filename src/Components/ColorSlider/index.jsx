import React from 'react';
import './style.css';

const ColorSlider=({baseColor,colorName, onValueChange})=>{
let trida=""

		if (baseColor === 'red') {
			trida="slider slider--red"
		} else if (baseColor === 'green') {
			trida="slider slider--green"
		} else {
			trida="slider slider--blue"
		}

let barva=""

    if (baseColor==="red"){
        barva ="redSlider"
    } else if (baseColor==="green"){
        barva ="greenSlider"
    } else {
        barva = "blueSlider" }



    return(
    <div class="sliders">
        <label for={baseColor}>{colorName}</label>
        <input 
          type="range"
          className={trida}
          id={barva}
          min="0"
          max="255"
          value="0"
        />
    </div>
    
 )   
}

export default ColorSlider;