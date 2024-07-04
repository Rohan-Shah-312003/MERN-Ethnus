import React, { useState } from "react";
import StudentForm from "./StudentForm";
import axios from "axios";

export default function CreateStudent() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = () => {
    const data = { name: arr[0], email: arr[1], regNo: arr[2] };
    axios
      .post("http://127.0.0.1:4000/routes/create-student", data)
      .then((result) => {
        if (result.status) {
          alert("New Record Added");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <StudentForm getState={getState} />
    </form>
  );
}
