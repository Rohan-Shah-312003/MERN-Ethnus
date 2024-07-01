import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "Exists") {
            alert("User already exists");
          } else if (res.data === "Does not exist") {
            navigate("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
