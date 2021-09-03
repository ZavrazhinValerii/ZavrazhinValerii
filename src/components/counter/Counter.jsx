import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

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

const withConsoleHOC = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export default withConsoleHOC(Counter);