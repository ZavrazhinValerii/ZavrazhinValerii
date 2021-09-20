import { useState } from "react";

export const Form = () => {
  const [counter, setCounter] = useState(0);

  console.log("Form rerendered");

  return (
    <>
      <br />
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
      {counter}
    </>
  );
};