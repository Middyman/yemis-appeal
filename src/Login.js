import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link className="link" to="/">
        <img
          className="login__logo"
          alt=""
          src="https://i.ibb.co/JR7BdnR/20210613-2221580-8797759895140513.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <input
            placeholder="E-mail: Example@yahoo.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password: ********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signin}>Sign in</button>
        </form>

        <p>
          By signing-in you agree to yemi's appeal Conditions of use & Sale.
          Please see our Privacy Notice, Our cookies Notice and our
          interest-based Ads Notice
        </p>

        <button onClick={register}>Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
