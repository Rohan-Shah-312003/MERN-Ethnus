import React, { useState } from "react";

export default function StudentForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState("");

  const arr = [name, email, regNo];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0 auto" }}>
      <input
        onChange={(event) => setName(event.target.value)}
        className="form-control "
        placeholder="Enter Name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="form-control "
        placeholder="Enter Email"
      />
      <input
        onChange={(event) => setRegNo(event.target.value)}
        className="form-control "
        placeholder="Enter Registration Number"
      />
      <button
        onClick={handleClick}
        type="submit"
        className="btn btn-warning d-block mx-auto my-3">
        Submit
      </button>
    </div>
  );
}
