import { useState } from "react";
import {usePrevious} from './usePrevious'
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  const prevCount = usePrevious(counter);

  console.log(prevCount);

  const handleClick = () => {

    
    setCounter(counter + 1);
  };

  return (
    <div className="Counter">
      <span className="Counter-counter">{counter}</span>
      <button onClick={handleClick} className="Counter-button">
        Click me!
      </button>
    </div>
  );
};