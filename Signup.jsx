import { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleButtonClick = async () => {
    setError("");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      // await firebase.auth().signOut();
    } catch (e) {
      setError(e?.message || "Error");
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <div>
        <p>
          Already registred? <Link to={ROUTES.SIGNIN}>Log in</Link>
        </p>
        {error && <div>Error</div>}
      </div>
    </div>
  );
};