import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDA36kDkuH0_yz_zPY3vtoh_2XsW1wNDw4",
  authDomain: "gb-react-project-39134.firebaseapp.com",
  databaseURL:
    "https://gb-react-project-39134-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-project-39134",
  storageBucket: "gb-react-project-39134.appspot.com",
  messagingSenderId: "754876876465",
  appId: "1:754876876465:web:22b4b2bcde761621268490",
  measurementId: "G-CKVTZBBYPL",
};

firebase.initializeApp(firebaseConfig);