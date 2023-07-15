// import React, { useState } from "react";
// import './../styles/App.css';


// const App = () => {
//   const [isVisible, setIsVisible] = useState('');

//   const handleButtonClick = () => {
//     setIsVisible("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
//   };

//   return ( 
//     <div id="main">
      
//         <p id="para" className="show">{isVisible}</p>
     
//       <button id="click" onClick={handleButtonClick}>
//         Click me!
//       </button>
//     </div>
//   );
// };

// export default App

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return ( 
    <div id="main">
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      <button id="click" onClick={handleButtonClick}>
        Click me!
      </button>
    </div>
  );
};

export default App;
