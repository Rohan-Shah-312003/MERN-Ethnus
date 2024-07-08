import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function EditStudentList() {
  const { id } = useParams();
  const [arr, setArr] = useState({ name: "", email: "", regNo: "" });
  const [newData, setNewData] = useState("");
  useEffect(() => {
    Axios.get("http://127.0.0.1:4000/routes/update-student/" + id)
      .then((result) => {
        if (result.status === 200) {
          const { name, email, regNo } = result.data;
          setArr({ name, email, regNo });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  const getState = (childData) => {
    setArr(childData);
  };
  return (
    <form>
      <StudentForm
        nameValue={arr.name}
        emailValue={arr.email}
        regNoValue={arr.regNo}
      />
    </form>
  );
}
