import { useCallback } from "react";
import firebase from "firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";
import { initProfileTrackAction } from "../../Store/Profile/actions";

export const Profile = ({ userName, changeUserName, text }) => {
  const name = useSelector(userNameSelector);
  const dispatch = useDispatch();

  const uid = firebase.auth().currentUser.uid;

  const handleToggleUserName = useCallback(() => {
    changeUserName({ name });
  }, [changeUserName, name]);

  useEffect(() => {
    dispatch(initProfileTrackAction());
  }, []);

  const handleUserNameChange = (e) => {
    firebase
      .database()
      .ref("profile")
      .child(uid)
      .child("name")
      .set(e.target.value);

    firebase
      .database()
      .ref("chats")
      .child("chatId")
      .push({ id: "id", message: "message" });
    // .remove
    // .push
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