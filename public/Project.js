import { useState, useCallback, useEffect } from "react";
import { Form } from "./components/form";
import "./App.css";
import { Counter } from "./components/counter/Counter";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    /// settimeout

    return () => {};
  }, []);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Form name={name} handleNameChange={handleNameChange}/>
      </header>
    </div>
  );
};

export default App;