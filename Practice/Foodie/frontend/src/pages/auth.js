import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function auth() {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["flag"]);

  const navigator = useNavigate();

  // TODO: Fix alert for catch function
  const onSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5500/auth/login", { username, password })
      .then((result) => {
        alert(result.data.message);
        setCookies("flag", result.data.flag);
        window.localStorage.setItem("userID", result.data.userID);
        window.localStorage.setItem("flag", result.data.flag);
        navigator("/");
      })
      .catch((err) => {
        navigator("/auth")
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </div>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5500/auth/register", { username, password })
      .then((result) => {
        if (result.data) {
          alert("Registered successfully");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={onSubmit}
      />
    </div>
  );
}

function Form({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          className="form-control-sm"
          type="text"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="form-control-sm"
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        {label}
      </button>
    </form>
  );
}
