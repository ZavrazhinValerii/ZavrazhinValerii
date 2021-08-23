import React, { useState, useRef, useEffect } from "react";
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Form = ({ name, handleNameChange, notExistingProp}) => {
  const [surname, setsurName] = useState("");

  const [isDisabled] = useState(false);

  const ref = useRef(null);

  useEffect(()=>{
  
      ref.current?.focus();
    
  },[])

  notExistingProp();
  const handleSurnameChange = (e) => {
    setsurName(e.target.value);
  };

  const handleClick = () => {console.log(surname)};

  return (
    <>
      <TextField variant='outlined' value={name} onChange={handleNameChange} inputRef={ref} />{" "}
      <TextField margin='normal' multiline maxRows={5} variant='outlined' color='primary' disabled={isDisabled} id="standard-basic" label="text" placeholder='enter some text' value={surname} onChange={handleSurnameChange}/>
      {/* <input type="text" value={surname} onChange={handleSurnameChange} /> */}
      <Button onClick={handleClick}>Click me!</Button>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  notExistingProp: PropTypes.func
}

Form.defaultProps={
  notExistingProp:()=>{console.log('notExistingProp is called')} 
}