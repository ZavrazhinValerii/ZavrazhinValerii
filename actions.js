import firebase from "firebase";
import {
  TOGGLE_SHOW_USER_NAME_ACTION,
  CHANGE_USER_NAME_ACTION,
} from "./constants";

export const toggleUserNameAction = (payload) => ({
  type: TOGGLE_SHOW_USER_NAME_ACTION,
  payload,
});

export const changeUserNameAction = (payload) => ({
  type: CHANGE_USER_NAME_ACTION,
  payload,
});

export const initProfileTrackAction = () => (dispatch) => {
  const uid = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref("profile")
    .child(uid)
    .child("name")
    .on("value", (snapshot) => {
      // snapshot.forEach
      dispatch(changeUserNameAction(snapshot.val()));
    });
};