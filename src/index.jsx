import React, { useState }from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './Components/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState("0");
  const [greenValue, setGreenValue] = useState("0");
  const [blueValue, setBlueValue] = useState("0");

  const handleRedSlider = (value) => {
    setRedValue(value)
  }

  const handleGreenSlider = (value) => {
    setGreenValue(value)
  }

  const handleBlueSlider = (value) => {
    setBlueValue(value)
  }


const color =`rgb(${redValue},${greenValue},${blueValue})`;

  return (
    <>
      <div class="color-panel">
		    <h1>Mixér barev</h1>
        <ColorSlider  baseColor = "red" colorName="Červená"  onValueChange={handleRedSlider} value={redValue} />
        <ColorSlider  baseColor = "green" colorName="Zelená" onValueChange={handleGreenSlider} value={greenValue} />
        <ColorSlider  baseColor = "blue" colorName="Modrá"   onValueChange={handleBlueSlider} value={blueValue}/>
		    <div class="color-box" id="color-box" style={{backgroundColor: color}}></div>
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
