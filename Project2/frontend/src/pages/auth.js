import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

export default function auth() {
  return (
    <div className="auth container">
      <Login />
      <Register />
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line
  const [_, setCookies] = useCookies(["flag"]);

  const navigator = useNavigate();

  // TODO: Fix alert for catch function
  const onSubmit = (event) => {
    event.preventDefault();
    Axios.post("https://podvibe-backend-e5rm.onrender.com/auth/login", {
      username,
      password,
    })
      .then((result) => {
        alert(result.data.message);
        setCookies("flag", result.data.flag);
        window.localStorage.setItem("userID", result.data.userID);
        window.localStorage.setItem("flag", result.data.flag);
        navigator("/");
      })
      .catch((err) => {
        navigator("/auth");
        console.error(err);
      });
  };

  return (
    <div className="auth-container ">
      <h2
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        Login
      </h2>
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
    Axios.post("https://podvibe-backend-e5rm.onrender.com/auth/register", {
      username,
      password,
    })
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
    <div className="auth-container">
      <h2
        style={{ color: "white", fontSize: "4.2rem" }}
        className="text-center ">
        Register
      </h2>
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
    <form className="bg-light" onSubmit={onSubmit}>
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
