import React, { useState }from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './Components/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState("0");
  const [greenValue, setGreenValue] = useState("0");
  const [blueValue, setBlueValue] = useState("0");

const color =`rgb(${redValue},${greenValue},${blueValue})`;

  return (
    <>
      <div class="color-panel">
		    <h1>Mixér barev</h1>
        <ColorSlider  baseColor = "red" colorName="Červená" onValueChange={() => {setRedValue(redSlider.value);}} />
        <ColorSlider  baseColor = "green" colorName="Zelená" onValueChange={() => {setGreenValue(greenSlider.value);}} />
        <ColorSlider  baseColor = "blue" colorName="Modrá" onValueChange={() => {setBlueValue(blueSlider.value);}}/>
		    <div class="color-box" id="color-box" style={{backgroundColor: color}}></div>
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
