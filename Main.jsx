import { Form } from "./Form";
import { Counter } from "../../Components/Counter/Counter";

export const Main = () => {
  console.log("Main rerendered");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Counter />
      <Form />
    </div>
  );
};