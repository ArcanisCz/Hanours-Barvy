import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './Components/ColorSlider';

const App = () => {
  // const [redValue, setRedValue] = useState(0);
  // const [greenValue, setGreenValue] = useState(0);
  // const [blueValue, setBlueValue] = useState(0);

  // const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
	// colorBox.style.backgroundColor = color;
  return (
    <>
      <div class="color-panel">
		    <h1>Mixér barev</h1>
        <ColorSlider  baseColor = "red" colorName="Červená" />
        <ColorSlider  baseColor = "green" colorName="Zelená" />
        <ColorSlider  baseColor = "blue" colorName="Modrá" />
		    <div class="color-box" id="color-box"></div>
      </div>
    </>

   
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
