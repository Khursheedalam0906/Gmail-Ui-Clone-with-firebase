import React from "react";
import GmailLogo from "./assets/Gmail-Logo.png";
import "./css/Login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { signin } from "./features/userSlice";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const Login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("login", user);
        dispatch(
          signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="logoImg">
          <img src={GmailLogo} style={{ width: 100 }} />
        </div>
        <button type="submit" onClick={Login}>
          Login With Gmail
        </button>
      </div>
    </div>
  );
};

export default Login;
