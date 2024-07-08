import React, { useState } from "react";

export default function StudentForm(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [regNo, setRegNo] = useState(props.regNo);
  const defaultValue = props.value;

  const arr = [name, email, regNo];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0 auto" }}>
      <input
        defaultValue={props.nameValue}
        onChange={(event) => setName(event.target.value)}
        className="form-control "
        placeholder="Enter Name"
      />
      <input
        defaultValue={props.emailValue}
        onChange={(event) => setEmail(event.target.value)}
        className="form-control "
        placeholder="Enter Email"
      />
      <input
        defaultValue={props.regNoValue}
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
