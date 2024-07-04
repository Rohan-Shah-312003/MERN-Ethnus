import React, { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";
import Axios from "axios";

export default function StudentList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:4000/routes/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const ListItems = () => {
    return arr.map((value, index) => {
      return <StudentListRow obj={value} />;
    });
  };
  return (
    <table
      style={{ maxWidth: "60%", margin: "50px auto" }}
      className="table table-striped text-center table-bordered">
      <thead className="table-dark">
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Registration Number</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>{ListItems()}</tbody>
    </table>
  );
}
