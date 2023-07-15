import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div id="main">
      {isVisible ? (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      ) : null}
      <button id="click" onClick={handleButtonClick}>
        Click me!
      </button>
    </div>
  );
};


export default App
