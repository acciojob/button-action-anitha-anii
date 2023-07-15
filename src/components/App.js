import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [isVisible, setIsVisible] = useState('');

  const handleButtonClick = () => {
    setIsVisible("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  };

  return (
    <div id="main">
      
        <p id="para" className="show">{isVisible}</p>
     
      <button id="click" onClick={handleButtonClick}>
        Click me!
      </button>
    </div>
  );
};


export default App
