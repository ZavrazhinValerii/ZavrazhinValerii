import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

export const Form = ({ name, handleNameChange, children }) => {
  const [surname, setsurName] = useState("");

  console.log(children);

  const [isDisabled] = useState(false);

  const handleSurnameChange = (e) => {
    setsurName(e.target.value);
  };

  const handleClick = () => {
    console.log(surname);
  };

  return (
    <>
      <TextField variant="outlined" value={name} onChange={handleNameChange} />{" "}
      <TextField
        margin="normal"
        multiline
        maxRows={5}
        variant="outlined"
        color="primary"
        disabled={isDisabled}
        id="standard-basic"
        label="text"
        placeholder="enter some text"
        value={surname}
        onChange={handleSurnameChange}
      />
      <Button onClick={handleClick}>Click me!</Button>
    </>
  );
};