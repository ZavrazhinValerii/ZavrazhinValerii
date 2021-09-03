import { useState } from "react";
import { useCallback } from "react";

export const Profile = ({ userName, changeUserName, text }) => {
  const [name, setName] = useState("");

  const handleToggleUserName = useCallback(() => {
    changeUserName({ name });
  }, [changeUserName, name]);

  const handleUserNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>Your profile</div>
      <input type="text" name={name} onChange={handleUserNameChange}></input>
      <button onClick={handleToggleUserName}>Toggle User Name</button>
      {userName}
      {text}
    </div>
  );
};