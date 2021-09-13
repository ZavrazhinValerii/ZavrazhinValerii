const obj = {
    x: 1,
  };
  
  const updateObject = (obj) => {
    const newObj = {
      ...obj,
      x: 2,
    };
  
    return newObj;
  };