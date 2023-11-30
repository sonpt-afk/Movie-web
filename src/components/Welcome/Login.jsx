import React from "react";
import "~/assets/css/Login.css";
import { useRef } from "react";
import { auth } from "../../firebase";
function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    console.log("register");

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Sign In</h1>
        <form action="">
          <input
            className="form-input-text"
            type="text"
            name="email"
            placeholder="Email or phone number"
            ref={emailRef}
          />
          <input
            className="form-input-text"
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="signin-btn" type="submit" onClick={login}>
            Sign In
          </button>
          <input
            className="form-input-checkbox"
            id="remember"
            type="checkbox"
          />
          <label htmlFor="remember"> Remember me</label>

          <a className="form-help">Need help?</a>
        </form>
        <div className="container-footer">
          <span className="container-footer-question">New to Netflix?</span>
          <a href="/" className="signup-link" onClick={register}>
            Sign up now
          </a>
          <p className="container-footer-more">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <a href="">Learn more</a> .
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
